import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

const productCard = ({id, title, description, link, logo}) =>
      ["li.product-card",
       ["a", {href: "/product/" + id + ".html"},
	["div.product-block",
	 ["div.product-logo", ["img", {src: logo, alt: "Logo of " + title}]],
	 ["div.product-details", ["div.product-name", title], ["div.product-description", description]]]]];

const productListing = products => ["div.product-section", header("products"), ["ul.products-list", ...products.map(p => productCard(p))]];

const makerCard = (maker) => 
      ["li.maker-card",
       ["a", {href: "#makers/" + maker},
	["div.maker-block",
	 ["div.maker-avatar", ["img", {src: "/avatar.svg", alt: "Avatar of " + maker}]],
	 ["div.maker-details",
	  ["div.maker-name", maker],
	  ["div.maker-role", "Maker"]]]]];

const product = ({title = "Untitled", description = "Description missing.", logo = "", makers = [], launch_date = "N/A",  website = "#", ph_link = "#", location = "N/A", mail = "N/A", twitter_link = "N/A"}) =>
      ["div.product-section",
       header("products"),
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
	 ["li", ["span.contact-list", ["img.product-contacts-icon", {src: "/location.svg"}], location]],
	 ["li", ["a.contact-list", {href: mail}, ["img.product-contacts-icon", {src: "/mail.svg"}], "Mail"]],
	 ["li", ["a.contact-list", {href: twitter_link}, ["img.product-contacts-icon", {src: "/twitter1.svg"}], "Twitter"]],
	 ["li", ["a.contact-list", {href: ph_link}, ["img.product-contacts-icon", {src: "/product-hunt.svg"}], "Product Hunt"]]]],
       ["section.sections-container",
	["div.section-header", "Makers"],
	["ul.makers-container", ...makers.map(maker => makerCard(maker))]]];

const productPage = (products) => buildPage(product(products));

const productListingPage = (products) => buildPage(productListing(products));

export { productPage, productListingPage };
