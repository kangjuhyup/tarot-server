import { OpenAiLogProbs } from "./logprobs.model";
import { Message } from "./message.model";

export class OpenAiChoice {
    text?: string;
    message? : Message; 
    index?: number;
    logprobs? : OpenAiLogProbs;
    finish_reason: "stop" | string;
  }