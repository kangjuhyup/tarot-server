import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from '@root/middleware/jwt/jwt.guard';
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
    @UseGuards(JwtGuard)
    getResult(
        @Req() request:Request,
        @Query() dto:getResultDto
    ) {
        return this.service.getResult(request,dto);
    }

    @Get('sharedResult')
    getHistory(
        @Query() dto:getHistoryDto,
    ) {
        return this.service.getSharedResult(dto);
    }
}
