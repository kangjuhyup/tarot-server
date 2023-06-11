import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarotController } from './tarot/tarot.controller';
import { TarotService } from './tarot/tarot.service';
import { TarotModule } from './tarot/tarot.module';
import { AiService } from './ai/ai.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    TarotModule, 
    AiModule
  ],
  controllers: [AppController, TarotController],
  providers: [AppService, TarotService, AiService],
})
export class AppModule {}
