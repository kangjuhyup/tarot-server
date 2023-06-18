import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { getResultDto } from './dto/getResult.dto';
import { TarotService } from './tarot.service';

@Controller('tarot')
export class TarotController {

    constructor(
        private readonly service:TarotService
    ) {}

    @Get('result')
    getResult(
        @Req() request:Request,
        @Query() dto:getResultDto
    ) {
        return this.service.getResult(request,dto);
    }
}
