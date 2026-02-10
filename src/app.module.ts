import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TendersModule } from './tenders/tenders.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_DATABASE || 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production
    autoLoadEntities: true,
  }),TendersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
