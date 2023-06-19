import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nick_name: string;

  @Column()
  jwt_refresh_token: string;

  @Column()
  last_call_time? : number;

  constructor(_uuid: string, _jwt_refresh_token?: string, _nick_name?: string ,_last_call_time? : number) {
    this.id = _uuid;
    this.jwt_refresh_token = _jwt_refresh_token;
    this.nick_name = _nick_name;
    this.last_call_time = _last_call_time;
    
  }
}
