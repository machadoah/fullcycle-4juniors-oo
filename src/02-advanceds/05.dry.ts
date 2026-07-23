abstract class Logger {
  protected abstract readonly loggerName: string;

  protected dateFormat() {
    return new Date().toISOString();
  }

  log(message: string) {
    console.log(`${this.dateFormat()} | ${this.loggerName}: ${message}`);
  }
}

class FileLogger extends Logger {
  protected readonly loggerName = "FileLogger";
}

class DatabaseLogger extends Logger {
  protected readonly loggerName = "DatabaseLogger";
}

class ConsoleLogger extends Logger {
  protected readonly loggerName = "ConsoleLogger";
}

new FileLogger().log("SALVANDOOOO!");
new DatabaseLogger().log("SALVANDOOOO!");
new ConsoleLogger().log("SALVANDOOOO!");

export {};
