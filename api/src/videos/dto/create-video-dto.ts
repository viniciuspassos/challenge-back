import { IsNotEmpty, IsString } from "class-validator";

export class CreateVideoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
