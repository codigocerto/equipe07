import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { CandidateEntity } from './entities/candidate.entity';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createCandidateDto: CreateCandidateDto,
  ): Promise<CandidateEntity> {
    const candidate = await this.prisma.candidate.create({
      data: {
        name: createCandidateDto.name,
        email: createCandidateDto.email,
        phone: createCandidateDto.phone,
        contributionType: createCandidateDto.contributionType,
        isSignIn: false,
      },
    });

    await Promise.all(
      createCandidateDto.technologies.map(async (tech) => {
        const technology = await this.prisma.technologies.findUnique({
          where: { name: tech.name, level: tech.level },
        });

        if (!technology) {
          await this.prisma.candidate.delete({ where: { id: candidate.id } });
          throw new NotFoundException(`Tecnologia ${tech.name} não existe!`);
        }

        await this.prisma.candidate_Technologies.create({
          data: {
            candidateId: candidate.id,
            technologyId: technology.id,
          },
        });

        return tech;
      }),
    );

    const findCandidate = await this.prisma.candidate.findUnique({
      where: {
        id: candidate.id,
      },
      include: {
        technologies: { include: { technology: true } },
      },
    });

    const transformedTechnologies = findCandidate.technologies.map((t) => ({
      id: t.technology.id,
      name: t.technology.name,
      level: t.technology.level,
    }));

    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      isSignIn: candidate.isSignIn,
      contributionType: candidate.contributionType,
      createdAt: candidate.createdAt,
      technologies: transformedTechnologies,
    };
  }

  async findAllCandidates(): Promise<CandidateEntity[]> {
    const candidates = await this.prisma.candidate.findMany({
      include: { technologies: { include: { technology: true } } },
    });

    const transformedCandidates = candidates.map((candidate) => ({
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      isSignIn: candidate.isSignIn,
      contributionType: candidate.contributionType,
      createdAt: candidate.createdAt,
      technologies: candidate.technologies.map((t) => ({
        id: t.technology.id,
        name: t.technology.name,
        level: t.technology.level,
      })),
    }));
    return transformedCandidates;
  }

  async findOneById(id: string): Promise<CandidateEntity> {
    const candidate = await this.prisma.candidate.findUnique({
      where: {
        id,
      },
      include: {
        technologies: { include: { technology: true } },
      },
    });

    if (!candidate) {
      return null;
    }

    const transformedTechnologies = candidate.technologies.map((t) => ({
      id: t.technology.id,
      name: t.technology.name,
      level: t.technology.level,
    }));

    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      isSignIn: candidate.isSignIn,
      contributionType: candidate.contributionType,
      createdAt: candidate.createdAt,
      technologies: transformedTechnologies,
    };
  }

  async findOneByEmail(email: string): Promise<CandidateEntity> {
    const candidate = await this.prisma.candidate.findUnique({
      where: {
        email: email,
      },
      include: {
        technologies: { include: { technology: true } },
      },
    });
    if (!candidate) {
      return null;
    }
    const transformedTechnologies = candidate.technologies.map((t) => ({
      id: t.technology.id,
      name: t.technology.name,
      level: t.technology.level,
    }));

    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone,
      isSignIn: candidate.isSignIn,
      contributionType: candidate.contributionType,
      createdAt: candidate.createdAt,
      technologies: transformedTechnologies,
    };
  }

  async removeCandidate(id: string): Promise<void> {
    await this.prisma.candidate.delete({ where: { id } });
  }
}
