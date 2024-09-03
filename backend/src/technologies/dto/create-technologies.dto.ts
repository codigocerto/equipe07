import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Level } from '@prisma/client';

export class CreateTechnologiesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Level)
  level: Level;
}
