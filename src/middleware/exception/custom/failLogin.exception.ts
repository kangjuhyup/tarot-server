import { HttpException } from '@nestjs/common';
import  StatusCode  from '../exception.status';
export class FailLoginException extends HttpException {
  constructor() {
    super('로그인에 실패했습니다.', StatusCode.get('FAIL_LOGIN') || 615);
  }
}