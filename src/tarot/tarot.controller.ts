import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { getHistoryDto } from './dto/getHistory.dto';
import { getResultDto } from './dto/getResult.dto';
import { TarotService } from './tarot.service';


@Controller('tarot')
export class TarotController {

    constructor(
        private readonly service:TarotService
    ) {}

    @Get('result')
    @UseGuards(AuthGuard('jwt'))
    getResult(
        @Req() request:Request,
        @Query() dto:getResultDto
    ) {
        return this.service.getResult(request,dto);
    }

    @Get('history')
    getHistory(
        @Query() dto:getHistoryDto,
    ) {
        return this.service.getHistory(dto);
    }
}
