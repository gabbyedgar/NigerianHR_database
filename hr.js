import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

// Function to create the "employees" table
async function createEmployeesTable() {
  try {
    // SQL query to create the "employees" table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS "users" (
        "id" serial PRIMARY KEY,
        "fullName" varchar,
        "department" integer,
        "employmentType" integer,
        "position" integer,
        "leave" integer,
        "training" integer,
        "attendance" integer,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "departments" (
        "id" serial PRIMARY KEY,
        "title" varchar,
        "description" varchar,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "positions" (
        "id" serial PRIMARY KEY,
        "department" integer,
        "position" varchar,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "employmentTypes" (
        "id" serial PRIMARY KEY,
        "type" varchar,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "payrolls" (
        "id" serial PRIMARY KEY,
        "user" integer,
        "salary" integer,
        "attendance" integer,
        "date" timestamp,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "leaves" (
        "id" serial PRIMARY KEY,
        "user" integer,
        "department" integer,
        "position" integer,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "trainings" (
        "id" serial PRIMARY KEY,
        "user" integer,
        "department" integer,
        "position" integer,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS "attendances" (
        "id" serial PRIMARY KEY,
        "user" integer,
        "department" integer,
        "position" integer,
        "date" timestamp,
        "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql.unsafe(createTableQuery); // Use unsafe to execute multiple queries
    console.log('Table "employees" created successfully.');
  } catch (error) {
    console.error('Error creating "employees" table:', error);
  }
}

// Call the function to create the "employees" table
createEmployeesTable();
export default sql;
