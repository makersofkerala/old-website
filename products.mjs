import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

const productListing = products => ["div.product-section",
			   header,
			   ["ul.products-list",
			    ...products.map(({id, title, description, link, logo}) =>
			    ["li.product-card",
			     ["a", {href: "/product/" + id + ".html"},
			      ["div.product-block",
			       ["div.product-logo", ["img", {src: logo, alt: "Logo of " + title}]],
			       ["div.product-details", ["div.product-name", title], ["div.product-description", description]]]]])]];

const makerCard = (maker) => 
      ["li.maker-card",
       ["a", {href: "#makers/" + maker},
	["div.maker-block",
	 ["div.maker-avatar", ["img", {src: "avatar.svg"}]],
	 ["div.maker-details",
	  ["div.maker-name", maker],
	  ["div.maker-role", "Maker"]]]]];

const product = ({title = "", description = "", logo = "", makers = [], launch_date = "",  website = "", ph_link = "", location = "", mail = "", twitter_link = ""}) =>
      ["div.product-section",
       header,
       ["div.product-head",
	["div.product-details-container",
	 ["div.product-name-details",
	  ["div.product-image-container", ["img", {src: logo, alt: "Logo for " + title}]],
	  ["div.product-text-content",
	   ["h2", title],
	   ["a", {href: website}, website],
	   ["h3.product-description", description]]],
	 ["div.view-product-button", ["a", {href: website}, "View Product ↗︎"]]],
	["ul.product-contacts",
	 ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/location.svg"}], location]],
	 ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/mail.svg"}], mail]],
	 ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/twitter1.svg"}], twitter_link]],
	 ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/product-hunt.svg"}], ph_link]]]],
       ["section.sections-container",
	["div.section-header", "Makers"],
	["ul.makers-container", ...makers.map(maker => makerCard(maker))]]];

const productPage = (products) => buildPage(product(products));

const productListingPage = (products) => buildPage(productListing(products));

export { productPage, productListingPage };
