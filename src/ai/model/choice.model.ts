import { OpenAiLogProbs } from "./logprobs.model";

export class OpenAiChoice {
    text?: string;
    index?: number;
    logprobs? : OpenAiLogProbs;
    finish_reason: "stop" | string;
  }