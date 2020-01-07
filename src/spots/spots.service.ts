import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from '../users/users.entity';
import { Spots } from './spots.entity';

@Injectable()
export class SpotsService {
  constructor(@Inject('SPOTS_REPOSITORY')
              private readonly spotsRepository: Repository<Spots>) { }

}
