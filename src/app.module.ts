import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarotController } from './tarot/tarot.controller';
import { TarotService } from './tarot/tarot.service';
import { TarotModule } from './tarot/tarot.module';
import { AiService } from './ai/ai.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from './repository/database.module';
import { AuthJwtModule } from './middleware/jwt/jwt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == 'production'
          ? '.env.production'
          : '.env.development',
      // 유효성 검사
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().default(8001),
        OPEN_AI_KEY: Joi.string().required(),
        OPEN_AI_ORG: Joi.string().required(),
      }),
    }),
    TarotModule,
    HttpModule,
    AiModule,
    AuthModule,
    DatabaseModule,
    AuthJwtModule,
  ],
  controllers: [AppController, TarotController, AuthController],
  providers: [AppService, TarotService, AiService, AuthService],
})
export class AppModule {}
