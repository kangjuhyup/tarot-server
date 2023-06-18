import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  nick_name: string;

  @Column()
  jwt_refresh_token: string;

  constructor(_uuid: string, _jwt_refresh_token?: string, _nick_name?: string) {
    this.id = _uuid;
    this.jwt_refresh_token = _jwt_refresh_token;
    this.nick_name = _nick_name;
  }
}
