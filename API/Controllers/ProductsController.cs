using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // Use Dependency Injection to get our StoreContext inside here so that we've got access to the products table in our database
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        
     public ProductsController(StoreContext context)
     {
            _context = context; 
     } 

    // Create two endpoints: 1. Get list of type Products. 2. Get individual product
    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null) return NotFound();

        return product;
    }
    }
}

/* Notes:
    It's considered best practice to make these types of requests asynchronous because you don't have control how long these are going to take.
    You don't want to block threads.
    Most web servers are multi-threaded but will eventually run out of threads.
    When it does, then people who are trying to access our website will get an error or time out.
    For example, when context.Products.ToList() runs and goes to the database to go and get the data, even if it takes a few seconds,
    it then uses a different thread to pass that request, and it can carry on handling other http requests that come in while waiting for that data to come back. 
    It doesn't need to be blocked.
    When the request has come back from the database, that original thread can be notified and it can then go and return the list that the user was requesting.
*/