import fs from "fs";
import { page as eventPage } from "./events.mjs";
import { productPage, productListingPage } from "./products.mjs";
import { makerPage, makerListingPage } from "./makers.mjs";
import * as z from "./z.mjs";
import { getProducts, getEvents,getMakers } from "./db/coda.mjs";
import { page as resourcesPage } from "./resources.mjs"
import { page as pocketSchoolPage } from "./pocket-startup-school.mjs"

const publicFolder = "./public/";

/*

Saveable page

{entity: "saveable",
state: {publicFolder, contents, title, location},
ts: {$init:
$save:
$genTitle: ({state: {publicFolder, title}}) => publicFolder + title;
}
fs.writeFileSync(publicFolder)

{
entity: "pages",
state: {pages: []},
ts: {$init,
$genlocations}
}

*/

const buildProductPage = async () => {

const products = await getProducts();

const productListing = productListingPage(products);

fs.writeFileSync(publicFolder + "index.html", productListing);

fs.writeFileSync(publicFolder + "products.html", productListing);

products.map(p => {

fs.writeFileSync(publicFolder + "product/" + p.id + ".html", productPage(p));

});

console.log("Generated products page");

};

const buildMakerPage = async ()  => {

const makers = await getMakers();

fs.writeFileSync(publicFolder + "makers.html", makerListingPage(makers));

fs.writeFileSync(publicFolder + "maker.html", makerPage());

console.log("Generated makers page");

}

const buildEvents = async () => {

const events = await getEvents();

fs.writeFileSync(publicFolder + "events.html", eventPage(events));

console.log("Generated events page");

}

const buildResourcesPage = () => {

fs.writeFileSync(publicFolder + "resources.html", resourcesPage());
console.log("Generated resources page");

}

const buildPocketStartupSchoolPage = () => {

fs.writeFileSync(publicFolder + "resources/pocket-startup-school.html", pocketSchoolPage());
console.log("Generated Pocket Startup School page");

}

export { buildEvents, buildProductPage, buildMakerPage, buildResourcesPage, buildPocketStartupSchoolPage };
