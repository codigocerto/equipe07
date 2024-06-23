import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prismaDb.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
