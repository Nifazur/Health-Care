import { defineConfig, env } from "prisma/config";
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables before using them
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default defineConfig({
  schema: './prisma/schema',
  migrations: {
    path: "./prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});