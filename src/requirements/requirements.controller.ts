import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RequirementsService } from './requirements.service';
import { CreateRequirementDto } from './dto/create-requirement.dto';

@Controller('tenders/:tenderId/requirements')
export class RequirementsController {
  constructor(private readonly requirementsService: RequirementsService) {}

  @Post()
  create(@Param('tenderId') tenderId: string, @Body() dto: CreateRequirementDto) {
    return this.requirementsService.create(tenderId, dto);
  }

  @Get()
  findAll(@Param('tenderId') tenderId: string) {
    return this.requirementsService.findAllByTender(tenderId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requirementsService.remove(id);
  }
}