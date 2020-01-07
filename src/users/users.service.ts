import { getRepository, Repository } from 'typeorm';
import { Users } from './users.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_REPOSITORY')
                private readonly usersRepository: Repository<Users>) { }

    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async findById(userId: string): Promise<Users> {
        return await this.usersRepository.findOne(userId);
    }

    async create(users: Users) {
        try {
            return await this.usersRepository.save(users);
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    update(userId: string, user: Users) {
        return this.usersRepository.update(userId, user);
    }

    async delete(userId: string) {
        return await this.usersRepository.delete(userId);
    }
}
