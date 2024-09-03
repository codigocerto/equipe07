import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTechnologiesDto } from '../dto/create-technologies.dto';
import { ResponseTechnologiesDto } from '../dto/response.getTechnologies.dto';
/* eslint-disable */
@Injectable()
export class TechnologiesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTechnologyDto: CreateTechnologiesDto) {
    return this.prisma.technologies.upsert({
      where: { name: createTechnologyDto.name },
      update: { level: createTechnologyDto.level },
      create: {
        name: createTechnologyDto.name,
        level: createTechnologyDto.level,
      },
    });
  }

  async findAll(): Promise<ResponseTechnologiesDto[]> {
    return;
  }
  async findOne(id: string): Promise<ResponseTechnologiesDto> {
    return;
  }
  async remove(id: string) {
    return this.prisma.technologies.delete({
      where: { id },
    });
  }
}
