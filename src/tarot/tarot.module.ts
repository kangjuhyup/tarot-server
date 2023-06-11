import { Module } from '@nestjs/common';
import { AiModule } from 'src/ai/ai.module';
import { TarotController } from './tarot.controller';
import { TarotService } from './tarot.service';

@Module({
    imports : [
        AiModule
    ],
    controllers : [
        TarotController
    ],
    providers : [
        TarotService
    ],

})
export class TarotModule {}
