import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
} from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly patronymic: string;

  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  readonly children: number = 0;

  // Добавляем поле для города
  @IsString()
  @IsOptional()
  readonly city?: string;

  // Добавляем поле для поликлиники
  @IsString()
  @IsOptional()
  readonly clinic?: string;
}
