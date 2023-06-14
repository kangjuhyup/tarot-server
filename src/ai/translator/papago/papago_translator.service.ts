import { Injectable } from '@nestjs/common';
import { PapagoClient } from './papago_translator.client';
@Injectable()
export class PapagoTranslatorService {

    private readonly client:PapagoClient;

    constructor(
        api_key : string,
        client_id : string,
    ) {
        if(!api_key) throw Error('invaild papago api key');
        if(!client_id) throw Error('invaild papago client id');
        this.client = new PapagoClient({api_key, client_id});
    }

    async translate(message:string) : Promise<JSON> {
        const targetLang :string = "ko";
        const sourceLang : string = "en";
        return await this.client.translateText({
            target : targetLang,
            source : sourceLang,
            text : message
        });
    }
}
