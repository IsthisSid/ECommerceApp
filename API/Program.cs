using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Execute and run method that adds seed data to our database 
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>();

            // Create developer exception page to catch exceptions that may throw into terminal
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
            try
            {
                context.Database.Migrate();
                DbInitializer.Initialize(context);
            }           
            catch (Exception ex)
            {
                logger.LogError(ex, "problem Migrating data");
            }

            host.Run();
            /* With this in place, what we should be able to do is:
                - delete our database
                - restart our application
                - create the database
                - create the tables in the database
                - add all the product in our seed class/DbInitializer.cs class
            */
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}