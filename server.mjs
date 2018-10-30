import * as xila from 'xila';

const PORT = process.argv.slice(2)[0] || 8000;

let server = xila.serve(xila.get("/*", xila.staticAssets("./")));

console.log("Starting server on " + PORT);

server.listen(PORT);