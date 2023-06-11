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

        const prompt = `타로카드 ${type_text}에 관해 100글자 이내 해석. 첫번째 카드 ${first_text} ${first_forward_text}, 두번째 카드 ${second_text} ${second_forward_text}, 세번째 카드 ${third_text} ${third_forward_text}.`
        return (await (this.aiService.chatService.textCompletion(prompt))).choices[0].text;
    }
}
