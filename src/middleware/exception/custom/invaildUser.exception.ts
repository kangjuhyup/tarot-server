import { HttpException } from '@nestjs/common';
import  StatusCode  from '../exception.status';
export class InvaildUserException extends HttpException {
  constructor() {
    super('존재하지 않는 회원입니다.', StatusCode.get('INVAILD_USER') || 614);
  }
}