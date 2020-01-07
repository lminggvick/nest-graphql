import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Req, Res, Response } from '@nestjs/common';
import { UsersService } from './users.service';
import { factory } from '../config/ConfigLog4j';
import { Users } from './users.entity';
import { CreateUserDto } from './dto/users.dto';

@Controller()
export class UsersController {
  private logger: any = factory.getLogger('app.e2e-spec');

  constructor(private readonly userService: UsersService) {
  }

  @Get()
  public health() {
    return 'Status OK!';
  }

  @Get('users')
  public async index(@Res() res) {
    const users = await this.userService.findAll();
    this.logger.info('users : ' + users);

    return res.status(HttpStatus.OK).json(users);
  }

  @Post('users')
  public async create(@Body() userDto: CreateUserDto, @Res() res) {
    const user = new Users();

    user.password = userDto.password;

    await this.userService.create(user);

    return res.status(HttpStatus.CREATED).send(user);
  }

  @Get('users/:id')
  public async show(@Req() req, @Res() res) {
    const id = req.params.id;
    if (!id) {
      return 'user:show:missingId';
    }

    const user = await this.userService.findById(id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Put('users/:id')
  public async update(@Req() req, @Res() res) {
    const id = req.params.id;
    if (!id) {
      return 'user:update:missingId';
    }

    await this.userService.update(id, req.body);
    return res.status(HttpStatus.OK).send();
  }

  @Delete('users/:id')
  public async delete(@Req() req, @Res() res) {
    const id = req.params.id;

    if (!id) {
      return 'users:delete:missingId';
    }

    const result = await this.userService.delete(id);

    return res.status(HttpStatus.OK).send(id);
  }
}
