import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AiService } from 'src/ai/ai.service';
import { PapagoTranslatorService } from 'src/ai/translator/papago/papago_translator.service';
import { boolToForward, numToCard, numToType } from 'src/utils/card';
import { getResultDto } from './dto/getResult.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TarotService {

    ip_cache :{}
    result_cache : {}

    constructor(
        private readonly aiService : AiService,
        private readonly translatorService : PapagoTranslatorService
    ) {}

    async getResult(req:Request,dto:getResultDto) {
        if(this.ip_cache[req.ip] && this.ip_cache[req.ip] < Date.now() - 3600000) return { success: false,  error : 'too many request. can request once an hour'}
        const { type_num, first_card_num, first_forward, second_card_num, second_forward,  third_card_num, third_forward } = dto;
        const type_text = numToType(type_num);
        const first_text = numToCard(first_card_num);
        const first_forward_text = boolToForward(first_forward)
        const second_text = numToCard(second_card_num);
        const second_forward_text = boolToForward(second_forward);
        const third_text = numToCard(third_card_num);
        const third_forward_text = boolToForward(third_forward);

        const prompt = `Give me a tarot card interpretation for ${type_text} in 200 characters or less. First card ${first_text} ${first_forward_text}, second card ${second_text} ${second_forward_text}, third card ${third_text} ${third_forward_text}.`
        try {
            const ai_result = (await (this.aiService.chatService.textCompletion(prompt))).choices[0].message.content
            const translator_result = await this.translatorService.translate(ai_result);
            this.ip_cache[req.ip] = Date.now();
            const uuid = uuidv4();
            this.result_cache[uuid] = {
                first_card_num,
                first_forward,
                second_card_num,
                second_forward,
                third_card_num,
                third_forward,
                translator_result
            }
            return { success : true , result : translator_result.message.result.translatedText , uuid : uuid };
        } catch(err) {
            console.error(err);
            return { sucess : false, error : err };
        }
    }
}
