import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SpotsController } from './spots.controller';
import { spotsProvider } from './spots.provider';
import { SpotsService } from './spots.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...spotsProvider,
    SpotsService,
  ],
  controllers: [SpotsController],
})

export class SpotsModule { }
