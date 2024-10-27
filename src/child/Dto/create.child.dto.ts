import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsBoolean,
} from "class-validator";

export class CreateChildDto {
  @IsString()
  @IsNotEmpty()
  readonly parentId: number;

  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsEmail()
  @IsOptional()
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly Patronymic: string;

  @IsString()
  @IsNotEmpty()
  readonly age: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly diagnosed: boolean;
}
