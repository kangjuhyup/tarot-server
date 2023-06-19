import { Module } from "@nestjs/common";
import { databaseProviders } from "../database.provider";
import { TarotRepository } from "./tarot.repository";
import { TarotProvider } from "./tarot.provider";

@Module({
    providers: [
        ...databaseProviders,
        TarotRepository,
        ...TarotProvider,
    ],
    exports : [
        TarotRepository,
        ...TarotProvider,
    ]
  })
  export class TarotRepoModule {}
  