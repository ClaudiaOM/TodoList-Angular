using Microsoft.EntityFrameworkCore;

namespace TodoListAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<TodoTask> TodoTasks => Set<TodoTask>();

    }
}