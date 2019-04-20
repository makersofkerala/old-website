import * as xila from 'xila';
import { buildEvents, buildProductPage, buildMakerPage, buildResourcesPage, buildPocketStartupSchoolPage } from './gen.mjs';

const PORT = process.argv.slice(2)[0] || 8000;

const server = xila.serve(
    xila.get("/products/", xila.file("./public/products.html")),
    xila.get("/makers/", xila.file("./public/makers.html")),
    xila.get("/events/", xila.file("./public/events.html")),
    xila.get("/*", xila.staticAssets("./public/"))
);

console.log("Starting server on " + PORT);

buildEvents();
buildMakerPage();
buildProductPage();
buildResourcesPage();
buildPocketStartupSchoolPage();

server.listen(PORT);
