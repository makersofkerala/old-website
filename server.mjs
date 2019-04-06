import * as xila from 'xila';
import { buildWebsite, buildProductPage, buildMakerPage } from './gen.mjs';

const PORT = process.argv.slice(2)[0] || 8000;

let server = xila.serve(
    xila.get("/products/", xila.file("./public/products.html")),
    xila.get("/makers/", xila.file("./public/makers.html")),
    xila.get("/events/", xila.file("./public/events.html")),
    xila.get("/*", xila.staticAssets("./public/"))
);

console.log("Starting server on " + PORT);

buildWebsite();
buildProductPage();
buildMakerPage();

server.listen(PORT);