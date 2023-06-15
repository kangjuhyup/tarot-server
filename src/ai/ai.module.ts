import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { PapagoTranslatorService } from './translator/papago/papago_translator.service';

@Module({
    imports : [
        HttpModule,
    ],
    providers : [
        PapagoTranslatorService,
        AiService,
    ],
    exports : [
        AiService,
        PapagoTranslatorService,
    ]
})
export class AiModule {}
