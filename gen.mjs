import fs from "fs";
import { page as eventPage } from "./events.mjs";
import { productPage, productListingPage } from "./products.mjs";
import { makerPage, makerListingPage } from "./makers.mjs";
import * as z from "./z.mjs";
import {getProducts, getEvents} from "./db/coda.mjs";

const publicFolder = "./public/";

const buildProductPage = async ()  => {

const products = await getProducts();

const productListing = productListingPage(products);

fs.writeFileSync(publicFolder + "index.html", productListing);
fs.writeFileSync(publicFolder + "products.html", productListing);

products.map(p => {

fs.writeFileSync(publicFolder + "product/" + p.id + ".html", productPage(p));

});


console.log("Generated products page");

}

const buildMakerPage = async ()  => {

// const products = await getProducts();

fs.writeFileSync(publicFolder + "makers.html", makerListingPage());

// products.map(p => {

// fs.writeFileSync(publicFolder + "product/" + p.id + ".html", makerPage(p));

// });

console.log("Generated makers page");

}

const buildWebsite = async () => {

const events = await getEvents();

fs.writeFileSync(publicFolder + "events.html", eventPage(events));

console.log("Generated events page");

}

export { buildWebsite, buildProductPage, buildMakerPage };