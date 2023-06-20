import { IsString } from "class-validator";

export class getHistoryDto {

    @IsString()
    uuid : string;
}