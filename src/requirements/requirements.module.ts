import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirement } from './entities/requirement.entity';
import { RequirementsService } from './requirements.service';
import { RequirementsController } from './requirements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Requirement])],
  providers: [RequirementsService],
  controllers: [RequirementsController],
})
export class RequirementsModule {}