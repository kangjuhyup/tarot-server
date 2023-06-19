import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TarotEntity } from './tarot.entity';

@Injectable()
export class TarotRepository {
  constructor(
    @Inject('TAROT_REPOSITORY') private repository: Repository<TarotEntity>,
  ) {}

  upsert(tarot: TarotEntity): Promise<TarotEntity> {
    return this.repository.save(tarot).catch((err) => {
      throw err;
    });
  }

  findOne(uuid:string) : Promise<TarotEntity>{
    return this.repository.findOne({
      where : {
        uuid
      }
    })
  }

  findFromUser(user_id: string): Promise<TarotEntity[]> {
    return this.repository.find({
      where: {
        user_id,
      },
    });
  }
}