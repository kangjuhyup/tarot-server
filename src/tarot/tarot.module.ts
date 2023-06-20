import { Module } from '@nestjs/common';
import { AuthJwtModule } from '@root/middleware/jwt/jwt.module';
import { DatabaseModule } from '@database/database.module';
import { AiModule } from 'src/ai/ai.module';
import { TarotController } from './tarot.controller';
import { TarotService } from './tarot.service';

@Module({
    imports : [
        AiModule,
        AuthJwtModule,
        DatabaseModule,
    ],
    controllers : [
        TarotController
    ],
    providers : [
        TarotService
    ],

})
export class TarotModule {}
