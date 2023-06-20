import { IsOptional, IsString } from "class-validator";

export class authKakaoDto {

    @IsOptional()
    @IsString()
    access_token? : string;
}