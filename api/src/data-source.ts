import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contact.entity";
import { initialMigration1679773602096 } from "./migrations/1679773602096-initialMigration";
import { clientDeletedAt1680125824618 } from "./migrations/1680125824618-clientDeletedAt";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [initialMigration1679773602096, clientDeletedAt1680125824618],
    entities: [Client, Contact],
  };
};
const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
