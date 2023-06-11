import { Transform } from "class-transformer";
import { IsBoolean, IsNumber } from "class-validator";

export class getResultDto {

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    type_num : number;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    first_card_num : number;

    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    first_forward : boolean;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    second_card_num : number;

    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    second_forward : boolean;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    third_card_num : number;

    @Transform(({ value }) => value === 'true')
    @IsBoolean()
    third_forward : boolean;
}