import {
    IsString,
    IsEmail,
    IsOptional,
    IsNumber,
    Min,
} from "class-validator";

export class UpdateCustomerDto {
    @IsString()
    @IsOptional()
    readonly firstName?: string;

    @IsString()
    @IsOptional()
    readonly lastName?: string;

    @IsString()
    @IsOptional()
    readonly patronymic?: string;

    @IsString()
    @IsOptional()
    readonly phoneNumber?: string;

    @IsString()
    @IsOptional()
    readonly password?: string;

    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsNumber()
    @IsOptional()
    @Min(0)
    readonly children?: number;

    // Поле для города
    @IsString()
    @IsOptional()
    readonly city?: string;

    // Поле для поликлиники
    @IsString()
    @IsOptional()
    readonly clinic?: string;
}
