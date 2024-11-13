import {
    IsString,
    IsEmail,
    IsOptional,
    IsNumber,
    IsBoolean,
} from "class-validator";

export class UpdateChildDto {
    @IsNumber()
    @IsOptional()
    readonly parentId?: number;

    @IsString()
    @IsOptional()
    readonly firstName?: string;

    @IsString()
    @IsOptional()
    readonly lastName?: string;

    @IsString()
    @IsOptional()
    readonly patronymic?: string;

    @IsNumber()
    @IsOptional()
    readonly age?: number;

    @IsBoolean()
    @IsOptional()
    readonly diagnosed?: boolean;
}
