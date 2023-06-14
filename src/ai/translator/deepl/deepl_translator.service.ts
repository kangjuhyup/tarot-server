import { Injectable } from '@nestjs/common';
import * as deepl from 'deepl-node';
@Injectable()
export class DeeplTranslatorService {

    private readonly client:deepl.Translator;

    constructor(
        key : string
    ) {
        this.client = new deepl.Translator(key);
    }

    async translate(message:string) : Promise<deepl.TextResult[]> {
        const targetLang : deepl.TargetLanguageCode = "ko";
        return await this.client.translateText([message],null,targetLang);
    }
}
