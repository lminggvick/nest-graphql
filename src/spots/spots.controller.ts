import { Controller, Get, Post } from '@nestjs/common';
import { SpotsService } from './spots.service';

@Controller()
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {
  }

  @Get('spots')
  public async findAll() {
    return 'This is findAll<spots.entity> controller';
  }

  @Get('spots/:id')
  public async show() {
    return 'This is specified spots.entity With :id param';
  }
}
