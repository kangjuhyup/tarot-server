import { Module } from '@nestjs/common';
import { UserRepoModule } from '@database/user/user.module';
import { databaseProviders } from './database.provider';
import { TarotRepoModule } from './tarot/tarot.module';

@Module({
    providers : [
        ...databaseProviders
    ],
    imports : [
        UserRepoModule,
        TarotRepoModule,
    ],
    exports : [
        UserRepoModule,
        TarotRepoModule,
    ]
})
export class DatabaseModule {}