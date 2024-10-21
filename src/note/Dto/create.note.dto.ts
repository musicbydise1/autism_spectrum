import { IsNotEmpty, IsInt, IsString } from "class-validator";

export class CreateNoteDto {
  @IsInt()
  @IsNotEmpty()
  parentId: number;

  @IsInt()
  @IsNotEmpty()
  childId: number;

  @IsString()
  @IsNotEmpty()
  noteText: string;
}
