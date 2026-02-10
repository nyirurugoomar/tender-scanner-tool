// src/tenders/tenders.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TendersService } from './tenders.service';
import { TendersController } from './tenders.controller';
import { Tender } from './entities/tender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tender])],
  providers: [TendersService],
  controllers: [TendersController],
})
export class TendersModule {}