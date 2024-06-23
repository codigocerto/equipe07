import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Injectable()
export class CandidateService {
  create(createCandidateDto: CreateCandidateDto) {
    return 'This action adds a new candidate';
  }

  findAll() {
    return `This action returns all candidate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidate`;
  }
}
