import { Controller, Post, Body } from '@nestjs/common';
import { ScannerService } from './scanner.service';
import { ScanDto } from './dto/scan.dto';

@Controller('scanner')
export class ScannerController {
  constructor(private readonly scannerService: ScannerService) {}

  @Post()
  scan(@Body() dto: ScanDto) {
    return this.scannerService.scan(dto.submissionId);
  }
}