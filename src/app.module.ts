import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendersModule } from './tenders/tenders.module';
import { RequirementsModule } from './requirements/requirements.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { DocumentsModule } from './documents/documents.module';
import { ScannerModule } from './scanner/scanner.module';

@Module({
  imports: [TendersModule, RequirementsModule, SubmissionsModule, DocumentsModule, ScannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
