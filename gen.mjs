import fs from "fs";
import { page as eventPage } from "./events.mjs";
import { website as productPage } from "./products.mjs";
import * as z from "./z.mjs";
import eventsDB from './db/2018-events.json';
import productsDB from './db/products.json';

const publicFolder = "./public/";

const buildProductPage = ()  => {

fs.writeFileSync(publicFolder + "products.html", productPage(productsDB));

}

const buildWebsite = () => {

fs.writeFileSync(publicFolder + "index.html", eventPage(eventsDB));

}

export { buildWebsite, buildProductPage };