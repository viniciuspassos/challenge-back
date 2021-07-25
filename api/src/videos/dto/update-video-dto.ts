import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateVideoDto {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  @IsString()
  url: string;
}
