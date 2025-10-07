/*Common HTTP Status Codes for Node.js Express Apps
These notes focus on the most useful HTTP status codes commonly used in Express.js applications, especially for REST APIs. Filtered to practical ones for success responses, redirects, client errors (e.g., validation, auth), and server errors.
Source: http-status-codes NPM package and MDN Web Docs
2xx: Success

200 OK: Standard response for successful HTTP requests, containing an entity corresponding to the requested resource. (e.g., res.status(200).json(data))
201 Created: The request has been fulfilled, resulting in the creation of a new resource. (e.g., after POST for new item)
204 No Content: The server successfully processed the request, and is not returning any content. (e.g., DELETE success)

3xx: Redirection

301 Moved Permanently: This and all future requests should be directed to the given URI. (e.g., res.redirect(301, '/new-url'))
302 Found: Tells the client to look at (browse to) another URL. (temporary redirect)
307 Temporary Redirect: The request should be repeated with another URI; however, future requests should still use the original URI.

4xx: Client Errors

400 Bad Request: The server cannot or will not process the request due to an apparent client error. (e.g., invalid JSON)
401 Unauthorized: Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. (e.g., missing token)
403 Forbidden: The request contained valid data and was understood by the server, but the server is refusing action. (e.g., insufficient permissions)
404 Not Found: The requested resource could not be found but may be available in the future. (e.g., res.status(404).send('Not found'))
405 Method Not Allowed: A request method is not supported for the requested resource. (e.g., POST to GET-only endpoint)
409 Conflict: Indicates that the request could not be processed because of conflict in the current state of the resource. (e.g., duplicate create)
422 Unprocessable Content: The request was well-formed but could not be processed. (e.g., validation errors)
429 Too Many Requests: The user has sent too many requests in a given amount of time. (e.g., rate limiting with express-rate-limit)

5xx: Server Errors

500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. (e.g., next(err) in error handler)
503 Service Unavailable: The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state. (e.g., DB down) */
