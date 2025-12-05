export class Database {
  constructor(private connectionString: string) {
    console.log(`Connecting to database at ${connectionString} ...`);
  }

  query(sql: string) {
    console.log(`Executing query: ${sql}`);
    // Simulate query execution
    return [];
  }
}

// Query the users database
const dbUsers = new Database("my-users-database-connection-string");
const queryResult = dbUsers.query("sql`SELECT * FROM users`");

console.log(queryResult);

// Query the products database
const dbProducts = new Database("my-products-database-connection-string");
const productQueryResult = dbProducts.query("sql`SELECT * FROM products`");

console.log(productQueryResult);
