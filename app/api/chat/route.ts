// import { getRequestContext } from '@cloudflare/next-on-pages'
import { getRequestContext } from "@cloudflare/next-on-pages";
import { createWorkersAI } from 'workers-ai-provider';
import { CoreMessage, streamText } from 'ai';


export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json<{messages: CoreMessage[]}>();
  console.log(messages)
  const ai = getRequestContext().env.AI
  const workersai = createWorkersAI({ binding: ai });
  const result = streamText({
    model: workersai('@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'),
    messages,
  })
  return result.toDataStreamResponse();
}
