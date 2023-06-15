import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import { OpenAiChatService } from './chat/chat.service';

@Injectable()
export class AiService {

    private readonly client : OpenAIApi;

    public chatService : OpenAiChatService;

    constructor(
        private readonly configService : ConfigService,
    ) {
        const config = new Configuration({
            apiKey : configService.get('OPEN_AI_KEY'),
            organization : configService.get('OPEN_AI_ORG'),
        })
        this.client = new OpenAIApi(config);       
        this.chatService = new OpenAiChatService(this.client); 
    }
}
