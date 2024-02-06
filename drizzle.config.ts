import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// export default {
//   schema: "./app/db/*",
//   out: "./drizzle",
//   connectionString: process.env.DATABASE_URL,
// } satisfies Config;

export default {
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
