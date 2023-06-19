import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@database/user/user.repository';
import { AxiosRequestConfig } from 'axios';
import { FailLoginException } from 'src/middleware/exception/custom/failLogin.exception';
import { authKakaoDto } from './dto/authKakao.dto';
import { UserEntity } from '@root/repository/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class AuthService {
  kakao = 'https://kapi.kakao.com/v2/user/me';

  constructor(
    private readonly httpService: HttpService,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async authKakao(res: Response, access_token: string) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        Authorization: `${access_token}`,
      },
    };
    const user = await this.httpService.axiosRef
      .get(this.kakao, requestConfig)
      .catch((err) => {
        throw err;
      });
    if (!user) throw new FailLoginException();
    const findUser = await this.userRepository.findOne(user.data.id);
    console.log(findUser);

    if (!findUser) {
      const refreshToken = await this._generateRefreshToken(user.data.id);
      const newUser: UserEntity = {
        id: user.data.id,
        nick_name: user.data.properties.nickname,
        jwt_refresh_token: refreshToken,
      };
      await this.userRepository.upsert(newUser);
      res.cookie('refresh_token', refreshToken);
    }
    const accessToken = await this._generateAccessToken(user.data.id);
    return res.send({ success: true, access : accessToken });
  }

  protected async _generateAccessToken(userId: string): Promise<string> {
    return this.jwtService.signAsync(
      { user_id: userId },
    );
  }

  protected async _generateRefreshToken(userId: string): Promise<string> {
    return this.jwtService.sign(
      { user_id: userId },
      {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
        expiresIn: `1d`,
      },
    );
  }

  protected async _signUp() {}
}
