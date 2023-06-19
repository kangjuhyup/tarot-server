import { DataSource } from "typeorm";
import { TarotEntity } from "./tarot.entity";

export const TarotProvider = [
    {
        provide : 'TAROT_REPOSITORY',
        useFactory : (ds:DataSource) => ds.getRepository(TarotEntity),
        inject : ['DATA_SOURCE'],
    }
]