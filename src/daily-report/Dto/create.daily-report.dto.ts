import { IsInt, IsNotEmpty, IsDate, Min, Max } from "class-validator";

export class CreateDailyReportDto {
  @IsInt()
  @IsNotEmpty()
  parentId: number;

  @IsInt()
  @IsNotEmpty()
  childId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  sleep: number;

  @IsInt()
  @Min(1)
  @Max(5)
  nutrition: number;

  @IsInt()
  @Min(1)
  @Max(5)
  condition: number;

  @IsInt()
  @Min(1)
  @Max(5)
  activity: number;
}
