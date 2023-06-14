import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import { OpenAiChatService } from './chat/chat.service';
import * as deepl from 'deepl-node';
import { PapagoTranslatorService } from './translator/papago/papago_translator.service';
import { DeeplTranslatorService } from './translator/deepl/deepl_translator.service';
// import { TranslatorService } from './translator/deepl/deepl_translator.service';

@Injectable()
export class AiService {

    private readonly client : OpenAIApi;

    public chatService : OpenAiChatService;
    public translatorService : PapagoTranslatorService | DeeplTranslatorService;

    constructor(
        private readonly configService : ConfigService,
    ) {
        const config = new Configuration({
            apiKey : configService.get('OPEN_AI_KEY'),
            organization : configService.get('OPEN_AI_ORG')
        })
        this.client = new OpenAIApi(config);       
        this.chatService = new OpenAiChatService(this.client); 
        this.translatorService = new PapagoTranslatorService(configService.get('PAPAGO_API_KEY'),configService.get('PAPAGO_ID'));
    }
}
