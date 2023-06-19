import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TarotEntity {
  @PrimaryColumn()
  uuid: string;

  @Column()
  user_id: string;

  @Column()
  first_card_num: number;

  @Column()
  first_forward : boolean;

  @Column()
  second_card_num: number;

  @Column()
  second_forward : boolean;

  @Column()
  third_card_num: number;

  @Column()
  third_forward : boolean;

  @Column()
  result : string;

  @Column({type:'bigint'})
  create_time : number;


  constructor(
    uuid: string,
    user_id: string,
    first_card_num: number,
    first_forward: boolean,
    second_card_num: number,
    second_forward: boolean,
    third_card_num: number,
    third_forward: boolean,
    result: string,
    create_time: number
  ) {
    this.uuid = uuid;
    this.user_id = user_id;
    this.first_card_num = first_card_num;
    this.first_forward = first_forward;
    this.second_card_num = second_card_num;
    this.second_forward = second_forward;
    this.third_card_num = third_card_num;
    this.third_forward = third_forward;
    this.result = result;
    this.create_time = create_time;
  }
  
}
