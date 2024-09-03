import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  ConflictException,
  HttpStatus,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { Response } from 'express';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  async create(
    @Res() response: Response,
    @Body() createCandidateDto: CreateCandidateDto,
  ): Promise<Response> {
    const alreadyCandidate = await this.candidateService.findOneByEmail(
      createCandidateDto.email,
    );
    if (alreadyCandidate) {
      throw new ConflictException('The email already exists!');
    }
    const user = await this.candidateService.create(createCandidateDto);
    return response.status(HttpStatus.CREATED).json(user);
  }

  @Get()
  async findAll(
    @Res() response: Response,
    @Query('email') email?: string,
  ): Promise<Response> {
    if (email) {
      const candidate = await this.candidateService.findOneByEmail(email);

      if (!candidate) {
        throw new NotFoundException(`Candidato com ${email} não encontrado!`);
      }

      return response.status(HttpStatus.ACCEPTED).json(candidate);
    }

    const allCandidates = await this.candidateService.findAllCandidates();

    return response.status(HttpStatus.OK).json(allCandidates);
  }

  @Get(':id')
  async findById(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const candidate = await this.candidateService.findOneById(id);

    if (!candidate) {
      throw new NotFoundException(`Candidato com ${id} não encontrado!`);
    }

    return response.status(HttpStatus.OK).json(candidate);
  }

  @Delete(':id')
  async remove(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const candidate = await this.candidateService.findOneById(id);

    if (!candidate) {
      throw new NotFoundException(`Candidato com ${id} não encontrado!`);
    }

    await this.candidateService.removeCandidate(id);

    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
