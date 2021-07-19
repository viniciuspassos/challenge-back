using System;
using System.Linq;
using System.Reflection;
using DbUp;
	
namespace DbMigrator
{
    class Program
    {
        static int Main(string[] args)
        {
            
            string dbPort = Environment.GetEnvironmentVariable("DB_PORT") ?? "5432";
            string dbHost = Environment.GetEnvironmentVariable("DB_HOST");
            string dbDatabase = Environment.GetEnvironmentVariable("DB_DATABASE");
            string dbUsername = Environment.GetEnvironmentVariable("DB_USERNAME");
            string dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");
            string connectionString = $"Host={dbHost};Port={dbPort};Database={dbDatabase};Username={dbUsername};Password={dbPassword};";

            EnsureDatabase.For.PostgresqlDatabase(connectionString);
            var upgrader = DeployChanges.To
                .PostgresqlDatabase(connectionString)
                .WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly())
                .LogToConsole()
                .Build();
            var result = upgrader.PerformUpgrade();
            if (!result.Successful)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(result.Error);
                Console.ResetColor();
                return -1;
            }
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(value: "Success!");
            Console.ResetColor();
            return 0;
        }
    }
}