import * as xila from 'xila';
import { buildWebsite, buildProductPage } from './gen.mjs';

const PORT = process.argv.slice(2)[0] || 8000;

let server = xila.serve(
    xila.get("/products/", xila.file("./public/products.html")),
    xila.get("/events/", xila.file("./public/events.html")),
    xila.get("/*", xila.staticAssets("./public/"))
);

console.log("Starting server on " + PORT);

buildWebsite();
buildProductPage();

server.listen(PORT);