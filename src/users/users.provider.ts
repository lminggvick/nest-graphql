import { Users } from './users.entity';
import { Connection, Repository } from 'typeorm';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Users),
    inject: ['DATABASE_CONNECTION'],
  },
];
