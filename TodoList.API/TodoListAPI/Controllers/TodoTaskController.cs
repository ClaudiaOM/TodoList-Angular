using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoListAPI.Data;

namespace TodoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoTaskController : ControllerBase
    {
        private readonly DataContext _context;

        public TodoTaskController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<TodoTask>>> GetTodoTasks()
        {
            return Ok(await _context.TodoTasks.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<TodoTask>>> CreateTodoAsync(TodoTask todoTask)
        {
            _context.TodoTasks.Add(todoTask);
            await _context.SaveChangesAsync();

            return Ok(await _context.TodoTasks.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<TodoTask>>> UpdateTodoAsync(TodoTask todoTask)
        {
            var task = await _context.TodoTasks.FindAsync(todoTask.Id);
            if (task == null)
                return BadRequest("Task not Found");

            task.Title = todoTask.Title;
            task.Description = todoTask.Description;

            await _context.SaveChangesAsync();

            return Ok(await _context.TodoTasks.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<TodoTask>>> DeleteTodoAsync(int id)
        {
            var task = await _context.TodoTasks.FindAsync(id);
            if (task == null)
                return BadRequest("Task not Found");

            _context.TodoTasks.Remove(task);
            await _context.SaveChangesAsync();

            return Ok(await _context.TodoTasks.ToListAsync());
        }
    }
}
