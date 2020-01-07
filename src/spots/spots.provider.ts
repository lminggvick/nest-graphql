import { Connection } from 'typeorm';
import { Spots } from './spots.entity';

export const spotsProvider = [
  {
    provide: 'SPOTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Spots),
    inject: ['DATABASE_CONNECTION'],
  }
]
