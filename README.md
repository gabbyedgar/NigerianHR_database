# Employee Management Database

This repository contains SQL code to create and populate tables for an employee management system. It includes tables for employees, departments, positions, employment types, payroll data, leaves, training, and attendance.

## Database Schema

Below is a visual representation of the database schema:

![Database Schema](./diagram/Hr.png)

https://dbdiagram.io/d/650119ed02bd1c4a5e74efb0

## Getting Started

To set up the database using this SQL code, follow these steps:

1. Ensure you have a PostgreSQL database server installed and running.

2. Create a new database or use an existing one where you want to set up this schema.

3. Execute the SQL code provided in the `database.sql` file in your PostgreSQL database. You can use tools like `psql` or a database client to run the SQL script.

4. Once the SQL code has been executed successfully, the database schema and initial data will be created.

## Usage

You can use this database for various employee management tasks, including tracking employee information, payroll, leaves, training, and attendance.

Example SQL queries:

- Retrieve employee information:
  ```sql
  SELECT * FROM "users" WHERE "fullName" = 'Femi Adeola';



