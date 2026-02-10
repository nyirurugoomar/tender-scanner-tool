import { Module } from '@nestjs/common';
import { ScannerService } from './scanner.service';
import { ScannerController } from './scanner.controller';
import { Submission } from '../submissions/entities/submission.entity';
import { Requirement } from '../requirements/entities/requirement.entity';
import { ScanResult } from './entities/scan-result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Submission, Requirement, ScanResult])],
  providers: [ScannerService],
  controllers: [ScannerController],
})
export class ScannerModule {}