import * as z from './z.mjs';

import  { buildPage, header, makerCard } from "./common.mjs";

const makerList = (makers) => ["ul.makers-list", ...makers.map(maker => makerCard(maker))];

const makerListing = (makers = []) => ["div.maker-section", header("makers"), makerList(makers)];

const maker = (maker = {}) => ["div.maker-section", header("makers"), makerCard(maker)];

const makerPage = (products) => buildPage(maker(products));

const makerListingPage = (products) => buildPage(makerListing(products));

export { makerPage, makerListingPage };
