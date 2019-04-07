import * as xila from 'xila';
import { buildWebsite, buildProductPage, buildMakerPage } from './gen.mjs';

const PORT = process.argv.slice(2)[0] || 8000;

let server = xila.serve(
    xila.get("/products/", xila.file("./public/products.html")),
    xila.get("/makers/", xila.file("./public/makers.html")),
    xila.get("/events/", xila.file("./public/events.html")),
    xila.get("/*", xila.staticAssets("./public/"))
);


/*

entity: serializer
data: {serialization: "", serializer},
transitions: {serialize: {initialize: $init, $$enter: serializePage}
actions: {serializePage: ({serialization, serializer}) => update(data, "serialization", serializer(data))}

entity: saveableDocument,
// TODO: Do Error checking for these.
// TODO: How would I asynchronously generate pages?
data: {doc: "", location: null, publicFolder: null},
transitions: {saving: {initialize: {$state: "init"}, $enter: "savePage", $next: "init"}}
action: {savePage: ({location, publicFolder}) => fs.writeFileSync(publicFolder + location, productListing)};

entity: page
data: {location, title, description, og:{}, fb: {}, analytics: [], stylesheets: [], scripts: [], content: []}};
state: "$init"
transitions: {$init: {save: "$saving", serialize: "$serializing"}},
events: {click: ["serialize", "save"]}

page ++ serializer ++ (saveableDocument ++ {doc: ":serializer/serialization"})

entity: blog
state: "init"
data: {publicFolder}
transitions: {init: {gen: {$state: "generating", $next: "*-page/savePage"}}}

// TODO: Attach a counter component and a console rendering mechanism to the blog whereby the
number of pages generated is counted and then logged in the end.

*/

console.log("Starting server on " + PORT);

buildWebsite();
buildProductPage();
buildMakerPage();

server.listen(PORT);
