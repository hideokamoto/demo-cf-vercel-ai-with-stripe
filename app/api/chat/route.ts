import { getRequestContext } from "@cloudflare/next-on-pages";
import { CoreMessage, streamText, wrapLanguageModel } from 'ai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { StripeAgentToolkit } from "@stripe/agent-toolkit/ai-sdk";

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json<{messages: CoreMessage[]}>();
  const { STRIPE_SECRET_API_KEY, STRIPE_CUSTOMER_ID, STRIPE_METER_NAME_INPUT, STRIPE_METER_NAME_OUTPUT, CLAUDE_API_KEY } = getRequestContext().env

  const stripeToolKit = new StripeAgentToolkit({
    secretKey: STRIPE_SECRET_API_KEY,
    configuration: {
        actions: {}
    }
  })
  const myStripeToolKit = stripeToolKit.middleware({
    billing: {
      customer: STRIPE_CUSTOMER_ID,
      meters: {
        input: STRIPE_METER_NAME_INPUT,
        output: STRIPE_METER_NAME_OUTPUT
      }
    }
  })
  const model = wrapLanguageModel({
    model: createAnthropic({
        apiKey: CLAUDE_API_KEY
    })('claude-3-5-sonnet-20241022'),
    middleware: [myStripeToolKit],
  })
  const result = streamText({
    model,
    messages,
  })
  return result.toDataStreamResponse();
}
