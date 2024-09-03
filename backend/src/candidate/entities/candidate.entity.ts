import { Candidate, Contribution } from '@prisma/client';
import { CreateTechnologiesDto } from 'src/technologies/dto/create-technologies.dto';

export class CandidateEntity implements Omit<Candidate, 'id'> {
  public readonly id: string;
  public name: string;
  public email: string;
  public phone: string;
  public isSignIn: boolean;
  public contributionType: Contribution;
  public readonly createdAt: Date;
  public technologies: CreateTechnologiesDto[];

  constructor(props: Omit<CandidateEntity, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = id;
    }
  }
}
