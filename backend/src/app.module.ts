import { Module } from '@nestjs/common';
import { CandidateModule } from './candidate/candidate.module';
import { PrismaService } from './database/prismaDb.service';
import { PrismaModule } from './database/prismaDb.module';

@Module({
  imports: [CandidateModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
