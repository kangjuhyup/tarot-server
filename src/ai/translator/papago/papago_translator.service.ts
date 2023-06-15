import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

export interface TranslateDto {
  source: string;
  target: string;
  text: string;
}

@Injectable()
export class PapagoTranslatorService {
  url = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';
  header: any;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async translate(message: string) {
    const targetLang: string = 'ko';
    const sourceLang: string = 'en';
    return await this._translateText({
      target: targetLang,
      source: sourceLang,
      text: message,
    });
  }

  async _translateText(dto: TranslateDto) {
    const body = {
      source: dto.source,
      target: dto.target,
      text: dto.text,
    };
    const requestConfig: AxiosRequestConfig = {
      headers: {
        "X-NCP-APIGW-API-KEY-ID":this.configService.get('PAPAGO_ID'),
        "X-NCP-APIGW-API-KEY":this.configService.get('PAPAGO_API_KEY'),
        "Content-Type":"application/json"
      },
      params: {},
    };
    const response = await this.httpService.axiosRef.post(
      this.url,
      body,
      requestConfig,
    );
    return response.data;
  }
}
