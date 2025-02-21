// import { getRequestContext } from '@cloudflare/next-on-pages'
import { getRequestContext } from "@cloudflare/next-on-pages";
import { createWorkersAI } from 'workers-ai-provider';
import { streamText } from 'ai';


export const runtime = 'edge'

export async function GET() {
  const ai = getRequestContext().env.AI
  const workersai = createWorkersAI({ binding: ai });
  const result = streamText({
    model: workersai('@cf/meta/llama-2-7b-chat-int8'),
    prompt: 'Write a 50-word essay about hello world.',
  })
  return result.toDataStreamResponse();
}
