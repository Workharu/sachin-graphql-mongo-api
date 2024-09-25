import { MikroORM } from "@mikro-orm/core";
import { Post, User, Comment } from "../entities/user";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { ReflectMetadataProvider } from "@mikro-orm/core";

export default {
  driver: PostgreSqlDriver,
  entities: [User, Post, Comment],
  dbName: process.env.DB_NAME,
  clientUrl: process.env.DB_URI,
  metadataProvider: ReflectMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
