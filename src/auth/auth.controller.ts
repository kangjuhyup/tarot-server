import { Body, Controller, Get, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { authKakaoDto } from './dto/authKakao.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('kakao')
  // @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return await this.service.authKakao(res,req.headers.authorization)
    // this.service.OAuthLogin({ req, res });
  }

  @Get('/kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoCallback(

  ) {
  }
}
