import { Controller, Get, Query } from '@nestjs/common';
import { getResultDto } from './dto/getResult.dto';
import { TarotService } from './tarot.service';

@Controller('tarot')
export class TarotController {

    constructor(
        private readonly service:TarotService
    ) {}

    @Get('result')
    getResult(@Query() dto:getResultDto) {
        return this.service.getResult(dto);
    }
}
