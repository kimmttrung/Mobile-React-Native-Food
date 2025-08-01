import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js"
import * as Schema from "../database/schema.js";

const sql = neon(ENV.DATABASE_URL)
export const db = drizzle(sql, { Schema });