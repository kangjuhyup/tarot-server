import { OpenAiChoice } from "./choice.model";
import { OpenAiUsage } from "./usage.model";

const choiceExample = { index: 0, finish_reason: 'stop', text: 'Hello from OpenAi' };
const usageExample = { prompt_tokens: 90, total_tokens: 100, completion_tokens: 10 } as OpenAiUsage;

export class OpenAiCompletionResponse {
  id: string;

  object: string;

  created: number;

  model: string;

  choices: OpenAiChoice[];

  usage: OpenAiUsage;
}