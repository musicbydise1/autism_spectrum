import { IsNotEmpty, IsInt, IsString } from "class-validator";

export class CreateFeedbackDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  feedbackText: string;
}
