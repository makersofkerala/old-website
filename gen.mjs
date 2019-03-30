import fs from "fs";
import { page as eventPage } from "./events.mjs";
import { productPage, productListingPage } from "./products.mjs";
import * as z from "./z.mjs";
import {getProducts, getEvents} from "./db/coda.mjs";

const publicFolder = "./public/";

const buildProductPage = async ()  => {

const products = await getProducts();

fs.writeFileSync(publicFolder + "product.html", productPage(products));

fs.writeFileSync(publicFolder + "products.html", productListingPage(products));

}

const buildWebsite = async () => {

const events = await getEvents();

fs.writeFileSync(publicFolder + "index.html", eventPage(events));

}

export { buildWebsite, buildProductPage };