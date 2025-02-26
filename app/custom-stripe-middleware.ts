import type { LanguageModelV1Middleware, LanguageModelV1StreamPart } from 'ai';
import Stripe from 'stripe'

type StripeUsageBasedBillingMiddlewareConfig = {
    secretKey: string
    billing?: {
      type?: 'token';
      customer: string;
      meters: {
        input?: string;
        output?: string;
      };
    };
  };


export const createStripeUsageBasedBillingMiddleware = (config: StripeUsageBasedBillingMiddlewareConfig): LanguageModelV1Middleware => {
    const bill = async ({
      promptTokens,
      completionTokens,
    }: {
      promptTokens: number;
      completionTokens: number;
    }) => {
        const meterEventSession = await new Stripe(config.secretKey, {
            apiVersion: '2025-01-27.acacia'
          }).v2.billing.meterEventSession.create();
        const stripe = new Stripe(meterEventSession.authentication_token)
        
      if (config.billing) {
        if (config.billing.meters.input) {
          await stripe.v2.billing.meterEventStream.create({
            events: [{
                event_name: config.billing.meters.input,
                payload: {
                    stripe_customer_id: config.billing.customer,
                    value: promptTokens.toString(),
                }
            }]
          });
        }
        if (config.billing.meters.output) {
         await stripe.v2.billing.meterEventStream.create({
            events: [{
                event_name: config.billing.meters.output,
                payload: {
                    stripe_customer_id: config.billing.customer,
                    value: completionTokens.toString(),
                }
            }]
          });
        }
      }
    };
 
    return {
        wrapGenerate: async ({doGenerate}) => {
          const result = await doGenerate();
  
          if (config.billing) {
            await bill(result.usage);
          }
  
          return result;
        },
  
        wrapStream: async ({doStream}) => {
          const {stream, ...rest} = await doStream();
  
          const transformStream = new TransformStream<
            LanguageModelV1StreamPart,
            LanguageModelV1StreamPart
          >({
            async transform(chunk, controller) {
              if (chunk.type === 'finish') {
                if (config.billing) {
                  await bill(chunk.usage);
                }
              }
  
              controller.enqueue(chunk);
            },
          });
  
          return {
            stream: stream.pipeThrough(transformStream),
            ...rest,
          };
        },
      };
}
  