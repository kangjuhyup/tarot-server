import { HttpException } from '@nestjs/common';
import  StatusCode  from '../exception.status';
export class InvaildResultException extends HttpException {
  constructor() {
    super('존재하지 결과입니다.', StatusCode.get('INVAILD_RESULT') || 601);
  }
}