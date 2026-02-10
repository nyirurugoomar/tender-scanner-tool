import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tender } from './entities/tender.entity';
import { CreateTenderDto } from './dto/create-tender.dto';

@Injectable()
export class TendersService {
  constructor(
    @InjectRepository(Tender)
    private readonly tenderRepo: Repository<Tender>,
  ) {}

  async create(dto: CreateTenderDto): Promise<Tender> {
    const tender = this.tenderRepo.create({
      title: dto.title,
      description: dto.description,
      deadline: typeof dto.deadline === 'string' ? new Date(dto.deadline) : dto.deadline,
    });
    return this.tenderRepo.save(tender);
  }

  findAll(): Promise<Tender[]> {
    return this.tenderRepo.find();
  }

  async findOne(id: string): Promise<Tender> {
    const tender = await this.tenderRepo.findOne({ where: { id } });
    if (!tender) throw new NotFoundException('Tender not found');
    return tender;
  }

  async remove(id: string): Promise<void> {
    const result = await this.tenderRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Tender not found');
  }
}