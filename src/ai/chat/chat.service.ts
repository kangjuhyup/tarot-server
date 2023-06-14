import { OpenAIApi } from 'openai';
import { OpenAiCompletionResponse } from '../model/completion.model';

export class OpenAiChatService {
  private readonly DEFAULT_COMPLETION_MODEL = 'gpt-3.5-turbo';

  private readonly MAX_TOKENS = 512;

  constructor(private readonly service: OpenAIApi) {}

  async textCompletion(
    query: string,
    modelId: string = this.DEFAULT_COMPLETION_MODEL,
    maxTokens: number = this.MAX_TOKENS,
  ): Promise<OpenAiCompletionResponse> {
    return this.service
        .createCompletion({
            prompt: query,
            model: modelId,
            max_tokens: maxTokens,
        })
        .then((response) => response.data) as unknown as OpenAiCompletionResponse;
  }
}
