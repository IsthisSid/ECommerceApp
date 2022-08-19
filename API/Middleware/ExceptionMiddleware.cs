

using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _env = env;
            _logger = logger;
            _next = next;

        }

        // Each piece of Middleware has to have an InvokeAsync method - needs to be asynchronous

        public async Task InvokeAsync(HttpContext context)
        {

            // Add try catch block. This middleware will sit at the top of the tree. 
            // It stays there to catch any exceptions that have not already been handled further down the tree.
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                // Handle the exception by logging the error to output
                _logger.LogError(ex, ex.Message);

                // Generate response to send back to the client
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 500;

                var response = new ProblemDetails
                {
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                    Title = ex.Message
                };

                // Return to our client as a JSON object format in camelCase
                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy =
                    JsonNamingPolicy.CamelCase
                };

                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }
        }

    }
}