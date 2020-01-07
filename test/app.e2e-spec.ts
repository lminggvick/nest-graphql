import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { factory } from '../src/config/ConfigLog4j';
import { getConnection } from 'typeorm';
import { catProd } from '../src/config/Config';

describe('AppController (e2e)', () => {
  const logger = factory.getLogger('app.e2e-spec');

  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200);
  });

  test('sample test case', () => {
    catProd.info('catProd logging');
    logger.info('log4j style logging');
    return expect(true).toBe(true);
  });

  test('database connection', () => {
    const connection = getConnection();
    logger.info('connection : ' + connection.isConnected);

    expect(connection).not.toBe(null);
    expect(connection.isConnected).toBe(true);
  });
});
