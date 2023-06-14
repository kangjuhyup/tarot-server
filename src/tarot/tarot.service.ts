import { Injectable } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';
import { boolToForward, numToCard, numToType } from 'src/utils/card';
import { getResultDto } from './dto/getResult.dto';

@Injectable()
export class TarotService {

    constructor(
        private readonly aiService : AiService
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

        const prompt = `Give me a tarot card interpretation for ${type_text} in 100 characters or less, in an astrologer-like tone. First card ${first_text} ${first_forward_text}, second card ${second_text} ${second_forward_text}, third card ${third_text} ${third_forward_text}.`
        try {
            // const result = (await (this.aiService.chatService.textCompletion(prompt))).choices[0].text
            const result = await this.aiService.translatorService.translate(prompt);
            console.log(result);
            return { success : true , result : result };
            // return { success : true, result :'abc'}
        } catch(err) {
            console.error(err);
            return { sucess : false, error : err };
        }
    }
}
