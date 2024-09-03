import { Contribution } from '@prisma/client';
import { CreateTechnologiesDto } from 'src/technologies/dto/create-technologies.dto';

export class ResponseCandidateDto {
  name: string;
  email: string;
  phone: string;
  contributionType: Contribution;
  technologies?: CreateTechnologiesDto[];
}
