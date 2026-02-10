import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TendersService } from './tenders.service';
import { CreateTenderDto } from './dto/create-tender.dto';

@Controller('tenders')
export class TendersController {
  constructor(private readonly tendersService: TendersService) {}

  @Post()
  create(@Body() dto: CreateTenderDto) {
    return this.tendersService.create(dto);
  }

  @Get()
  findAll() {
    return this.tendersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tendersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tendersService.remove(id);
  }
}