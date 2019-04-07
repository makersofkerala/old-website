import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

const makerCard = ({id, title, description, link, logo}) =>
      ["li.product-card",
       ["a", {href: "/product/" + id + ".html"},
	["div.product-block",
	 ["div.product-logo", ["img", {src: logo, alt: "Logo of " + title}]],
	 ["div.product-details", ["div.product-name", title], ["div.product-description", description]]]]];

const makerListing = (makers = []) => ["div.maker-section", header("makers"), ["ul.makers-list", ...makers.map(m => makerCard(m))]];

const maker = () => ["div.maker-section", header("makers"), ["div", "Maker details here"]];

const makerPage = (products) => buildPage(maker(products));

const makerListingPage = (products) => buildPage(makerListing(products));

export { makerPage, makerListingPage };
