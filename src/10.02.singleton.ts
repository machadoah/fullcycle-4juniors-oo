export class Database {
  private static instance: Database;

  private constructor() {
    console.log(`Database connected...`);
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public runQuery(query: string) {
    console.log(`Running query: ${query}`);
  }
}

const db = Database.getInstance();
const db2 = Database.getInstance();
const db3 = Database.getInstance();
const db4 = Database.getInstance();
const db5 = Database.getInstance();
db.runQuery("SELECT * FROM users");
db.runQuery("SELECT * FROM products");
db.runQuery("SELECT * FROM categories");
