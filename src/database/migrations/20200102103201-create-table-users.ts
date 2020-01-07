'use strict';

export async function up(sequelize) {
    // language=PostgreSQL
    sequelize.query(`
        CREATE TABLE "users" (
            "userId" VARCHAR(10) PRIMARY KEY NOT NULL,
            "name" VARCHAR(30) NOT NULL,
            "email" VARCHAR(100) UNIQUE NOT NULL,
            "password" TEXT NOT NULL,
            "birthday" TIMESTAMP,
            "createdAt" TIMESTAMP NOT NULL,
            "updatedAt" TIMESTAMP NOT NULL,
            "deletedAt" TIMESTAMP
        );
    `);

    console.log('*Table users created!*');
}

export async function down(sequelize) {
    // language=PostgreSQL
    sequelize.query(`DROP TABLE users`);
}