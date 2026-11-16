// NODE LAB: My first web server, built with only Node's built-in modules (no Express).

// NODE LAB: Import the native "http" module. It ships with Node, so there is nothing to install.
const http = require('http');

const PORT = 3000;
const MESSAGE = 'Hello, this is my first Node.js server!';

// NODE LAB: createServer() takes a callback (the "request handler").
// Node calls it once for every request that arrives, passing two objects:
//   req: what the browser sent (method, URL, headers)
//   res: what we send back (status code, headers, body)
const server = http.createServer((req, res) => {
  // Log each visit so we can see requests arriving in the terminal.
  console.log(`${req.method} ${req.url}`);

  // NODE LAB: Send status 200 (OK) and say the body is plain text.
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // end() writes the body and finishes the response. Without it the browser keeps waiting.
  res.end(MESSAGE);
});

// NODE LAB: If the port can't be used (for example, another server is already on 3000),
// print a clear message instead of a long stack trace.
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the other server and try again.`);
  } else {
    console.error('Server error:', err.message);
  }
  process.exit(1);
});

// NODE LAB: Start listening only when this file is run directly (`node server.js`).
// When the test file imports it, it doesn't start on port 3000; the test picks its own port.
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = { server, MESSAGE };
