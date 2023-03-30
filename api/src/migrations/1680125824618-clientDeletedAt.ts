import { MigrationInterface, QueryRunner } from "typeorm";

export class clientDeletedAt1680125824618 implements MigrationInterface {
    name = 'clientDeletedAt1680125824618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "deletedAt"`);
    }

}
