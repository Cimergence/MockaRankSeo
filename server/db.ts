import dotenv from "dotenv";
dotenv.config();
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Use environment variable for database connection
const databaseUrl = process.env.DATABASE_URL as string;
console.log(`Database URL is: ${databaseUrl}`);
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

// Create a postgres client
const client = postgres(databaseUrl, { max: 10 });

// Create a drizzle instance using the postgres client
export const db = drizzle(client, { schema });
