import { config } from "dotenv";
import { resolve } from "node:path";

const env = process.env.NODE_ENV || "development";

const envPath = `.env.${env}`;

config({ path: resolve(envPath) });

export const PORT = process.env.PORT;
export const DB_URI = process.env.DB_URI;
export const DB_NAME = process.env.DB_NAME;
