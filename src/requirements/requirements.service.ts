import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requirement } from './entities/requirement.entity';
import { CreateRequirementDto } from './dto/create-requirement.dto';

@Injectable()
export class RequirementsService {
  constructor(
    @InjectRepository(Requirement)
    private readonly reqRepo: Repository<Requirement>,
  ) {}

  async create(tenderId: string, dto: CreateRequirementDto) {
    const requirement = this.reqRepo.create({
      ...dto,
      tender: { id: tenderId },
    });
    return this.reqRepo.save(requirement);
  }

  findAllByTender(tenderId: string) {
    return this.reqRepo.find({ where: { tender: { id: tenderId } } });
  }

  async findOne(id: string) {
    const req = await this.reqRepo.findOne({ where: { id } });
    if (!req) throw new NotFoundException('Requirement not found');
    return req;
  }

  async remove(id: string) {
    const result = await this.reqRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Requirement not found');
  }
}