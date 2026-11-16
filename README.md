# My First Server

A basic Node.js backend service that acknowledges a user's visit. It uses only the built-in `http` module: no frameworks and no dependencies.

When you open `http://localhost:3000`, the server responds with HTTP status **200 OK** and the text:

```
Hello, this is my first Node.js server!
```

## Tech stack

- [Node.js](https://nodejs.org/) (tested on v24)
- Built-in `http` module
- Built-in test runner (`node:test`)

## Getting started

```bash
# 1. Check Node.js is installed
node -v

# 2. Start the server
npm start          # same as: node server.js

# 3. Visit it
# open http://localhost:3000 in your browser
```

Stop the server with `Ctrl + C`.

## Scripts

| Command      | What it does                         |
| ------------ | ------------------------------------ |
| `npm start`  | Starts the server on port 3000       |
| `npm test`   | Runs the tests with `node --test`    |

## How it works

1. `http.createServer()` creates a server with a request handler that Node calls for every incoming request.
2. The handler logs the request (`GET /`), sets status `200` and `Content-Type: text/plain`, and ends the response with the message.
3. `server.listen(3000)` starts the server. Node's event loop then waits for requests without blocking.
4. If port 3000 is already taken, the server prints a clear message and exits.

## Project structure

```
my-first-server/
├── server.js        # the HTTP server
├── server.test.js   # tests
├── package.json     # project info and scripts (created with npm init -y)
└── README.md
```

## Testing

```bash
npm test
```

The tests start the server on a random free port and check the status code, the response text and the content type.
