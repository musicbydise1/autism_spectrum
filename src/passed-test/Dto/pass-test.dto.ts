import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export default class PassTestDto {
  @IsNumber()
  @IsNotEmpty()
  readonly parentId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly childId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly testId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly testPoints: number;

  @IsString()
  @IsNotEmpty()
  readonly notes: string;
}
