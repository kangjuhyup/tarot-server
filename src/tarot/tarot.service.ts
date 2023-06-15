import { Injectable } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';
import { PapagoTranslatorService } from 'src/ai/translator/papago/papago_translator.service';
import { boolToForward, numToCard, numToType } from 'src/utils/card';
import { getResultDto } from './dto/getResult.dto';

@Injectable()
export class TarotService {

    constructor(
        private readonly aiService : AiService,
        private readonly translatorService : PapagoTranslatorService
    ) {}

    async getResult(dto:getResultDto) {
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
            const ai_result = (await (this.aiService.chatService.textCompletion(prompt))).choices[0].text
            console.log(ai_result);
            const translator_result = await this.translatorService.translate(ai_result);
            return { success : true , result : translator_result.message.result.translatedText };
            // return { success : true, result :'abc'}
        } catch(err) {
            console.error(err);
            return { sucess : false, error : err };
        }
    }
}
