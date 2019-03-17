import * as xila from 'xila';
import { buildWebsite } from './gen.mjs';

const PORT = process.argv.slice(2)[0] || 8000;

let server = xila.serve(xila.get("/*", xila.staticAssets("./public/")));

console.log("Starting server on " + PORT);

buildWebsite();

server.listen(PORT);