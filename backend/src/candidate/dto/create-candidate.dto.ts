import { Contribution } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { CreateTechnologiesDto } from 'src/technologies/dto/create-technologies.dto';

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 255)
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNumberString()
  @IsNotEmpty()
  @Length(11, 11)
  phone: string;
  @IsEnum(Contribution)
  contributionType: Contribution;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTechnologiesDto)
  technologies?: CreateTechnologiesDto[];
}
