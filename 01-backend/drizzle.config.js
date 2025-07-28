import { ENV } from "./src/config/env.js";

export default {
    schema: "./src/database/schema.js",
    out: "./src/database/migrations",
    dialect: "postgresql",
    dbCredentials: { url: ENV.DATABASE_URL },
};