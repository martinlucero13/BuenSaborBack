export const databaseOptions = {
  connections: {
    legacy: {
      name: "sql-legacy",
      db_provider: "mysql",
      //db_host: process.env.MSSQL_DB_HOST,
      db_port: process.env.MSSQL_DB_PORT || 3306,
      db_name: process.env.MSSQL_DB_NAME,
      db_user: process.env.MSSQL_DB_USER,
      db_pass: process.env.MSSQL_DB_PASS,
      //db_schema: process.env.MSSQL_DB_SCHEMA || "dbo",
      logging: Boolean(process.env.LOGGIN || false),
    },
  },
};
