import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
