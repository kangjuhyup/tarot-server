import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AiService } from 'src/ai/ai.service';
import { PapagoTranslatorService } from 'src/ai/translator/papago/papago_translator.service';
import { boolToForward, numToCard, numToType } from 'src/utils/card';
import { getResultDto } from './dto/getResult.dto';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from '@root/repository/user/user.repository';
import { TarotRepository } from '@root/repository/tarot/tarot.repository';
import { TarotEntity } from '@root/repository/tarot/tarot.entity';
import { JwtService } from '@nestjs/jwt';
import { InvaildUserException } from '@root/middleware/exception/custom/invaildUser.exception';
import { getHistoryDto } from './dto/getHistory.dto';
import { InvaildResultException } from '@root/middleware/exception/custom/invaildResult.exception';

@Injectable()
export class TarotService {
  constructor(
    private readonly aiService: AiService,
    private readonly translatorService: PapagoTranslatorService,
    private readonly userRepository: UserRepository,
    private readonly tarotRepository: TarotRepository,
    private readonly jwtService: JwtService,
  ) {}

  async getResult(req: Request, dto: getResultDto) {
    const user_id = (this.jwtService.decode(
      req.headers.authorization.split(' ')[1],
    )  as { user_id: string }).user_id;
    const user = this.userRepository.findOne(user_id);
    if(!user) throw new InvaildUserException();
    const {
      type_num,
      first_card_num,
      first_forward,
      second_card_num,
      second_forward,
      third_card_num,
      third_forward,
    } = dto;
    const type_text = numToType(type_num);
    const first_text = numToCard(first_card_num);
    const first_forward_text = boolToForward(first_forward);
    const second_text = numToCard(second_card_num);
    const second_forward_text = boolToForward(second_forward);
    const third_text = numToCard(third_card_num);
    const third_forward_text = boolToForward(third_forward);

    const prompt = `Give me a tarot card interpretation for ${type_text} in 200 characters or less. First card ${first_text} ${first_forward_text}, second card ${second_text} ${second_forward_text}, third card ${third_text} ${third_forward_text}.`;
    try {
      const ai_result = (
        await this.aiService.chatService.textCompletion(prompt)
      ).choices[0].message.content;
      const translator_result = await this.translatorService.translate(
        ai_result,
      );
      const uuid = uuidv4();
      const tarot: TarotEntity = new TarotEntity(
        uuid,
        user_id,
        first_card_num,
        first_forward,
        second_card_num,
        second_forward,
        third_card_num,
        third_forward,
        translator_result.message.result.translatedText,
        Date.now(),
      );
      await this.tarotRepository.upsert(tarot);
      return {
        success: true,
        result: translator_result.message.result.translatedText,
        uuid: uuid,
      };
    } catch (err) {
      console.error(err);
      return { sucess: false, error: err };
    }
  }

<<<<<<< Updated upstream
  getHistory(dto:getHistoryDto) {
=======
  async getSharedResult(dto:getHistoryDto) {
>>>>>>> Stashed changes
      const {uuid} = dto;
      const result = await this.tarotRepository.findOne(uuid);
      if(!result) throw new InvaildResultException();
      return {
        success : true,
        result : result
      }
  }
}
