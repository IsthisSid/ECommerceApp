using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    // Use Dependency Injection to get our StoreContext inside here so that we've got access to the products table in our database
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext context;
        
     public ProductsController(StoreContext context)
     {
            this.context = context;      
     } 

    // Create two endpoints: 1. Get list of type Products. 2. Get individual product
    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
        var products = context.Products.ToList();

        return Ok(products); 
    }
    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
        return context.Products.Find(id);
    }
    }
}