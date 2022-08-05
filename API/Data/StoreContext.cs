using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {

        }
        // For each of our entities we need to create a DbSet
        public DbSet<Product> Products { get; set; }
    }
}