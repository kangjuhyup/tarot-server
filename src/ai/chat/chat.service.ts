import { OpenAIApi } from "openai";

export class OpenAiChatService {
    private readonly DEFAULT_COMPLETION_MODEL = 'text-davinci-003';
  
    private readonly MAX_TOKENS = 128;

    constructor(
        private readonly service : OpenAIApi
    ){}

    async textCompletion(query: string, modelId: string = this.DEFAULT_COMPLETION_MODEL, maxTokens: number = this.MAX_TOKENS): Promise<OpenAiCompletionResponse> {
        return await this.service.createCompletion({
          "prompt": query,
          "model": modelId,
          "max_tokens": maxTokens,
        });
      }
}