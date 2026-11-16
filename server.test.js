// NODE LAB: Tests using Node's built-in test runner (node:test), so nothing to install.
const test = require('node:test');
const assert = require('node:assert');
const { server, MESSAGE } = require('./server');

let baseUrl;

// Start the server on port 0, which tells the OS to pick any free port.
// That way the tests still work even if something is already running on 3000.
test.before(async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

// Stop the server after the tests so the process can exit.
test.after(() => server.close());

test('GET / responds with status 200', async () => {
  const res = await fetch(baseUrl);
  assert.strictEqual(res.status, 200);
});

test('responds with the exact welcome text', async () => {
  const res = await fetch(baseUrl);
  assert.strictEqual(await res.text(), 'Hello, this is my first Node.js server!');
  assert.strictEqual(MESSAGE, 'Hello, this is my first Node.js server!');
});

test('sends the body as plain text', async () => {
  const res = await fetch(baseUrl);
  assert.match(res.headers.get('content-type'), /^text\/plain/);
});
