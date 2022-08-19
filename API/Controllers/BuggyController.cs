using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
            // Results in 404 response to the client
        }
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest() {
            return BadRequest(new ProblemDetails{Title = "This is a bad request"});
            // Typically used if something could go wrong, i.e., attempt to save something in our database, and there is a problem saving those changes.
        }
        [HttpGet("not-authorized")]
        public ActionResult GetUnauthorized(){
            return Unauthorized();
            // Results in 401 error
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem1", "This is the first error"); 
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem();
            // returns 400 bad request and also gives us array of errors that occurred in the ModelState
            // User fills out form and haven't supplied the required fields: then our API controller can return a validation error response.
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw new Exception("This is a server error");
        }
    }
}