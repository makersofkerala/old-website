import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

/*
entity: "card",
style:
{position: "relative",
border-radius: "8px",
overflow: "hidden",
box-shadow: "0px 4px 12px rgba(196, 207, 218, 0.45)",
transition: "0.15s box-shadow ease",
background: "white"}

entity: "product-block",
style: {display: flex; padding: 1rem 1.25rem}
view: ["div", @productLogo, @productDetails]

entity: "product-logo",
style: {width: 80px; height: 80px;}
["div", ["img", {src: logo, alt: "Logo of " + title}]]

entity: "product-details",
style: {padding-left: 1.25rem}
["div", product-name, product-description]]

@product-name
ui: "@div (text:title)"

style: {font-weight: 600; margin-bottom: 10px;}

@product-description
ui: "@div (text:description)"

style {opacity: 0.5; font-size: 13px; height: 33px; overflow: hidden; line-height: 1.3;}

@product-card
data: {id, title, description, link: genLink(), logo,
actions: {genLink: ({id}) => "/product/" + id + ".html"},
productBlock: ({logo, title, description}) => merge(productBlock, {logo,title,description})},
view: ["li", ["a", {href: ":link"}, ":productBlock"]]

@list
data: {items, itemView}
view: ["ul", pc.map(items, itemView)]

@productList
components: [list]
view: merge(list, {itemView: "@product-card", items: [products]});

*/

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
	   // ["div.product-link",["a", {href: website}, website]]

	   ["h3.product-description", description]]],
	 ["div.view-product-button", ["a", {href: website}, "View Product ↗︎"]]],
	["ul.product-contacts",
	 ["li", ["span.contact-list", ["img.product-contacts-icon", {src: "/location.svg"}], location]],
	 ["li", ["a.contact-list", {href: "mailto:" + mail}, ["img.product-contacts-icon", {src: "/mail.svg"}], "Mail"]],
	 ["li", ["a.contact-list", {href: twitter_link}, ["img.product-contacts-icon", {src: "/twitter1.svg"}], "Twitter"]],
	 ["li", ["a.contact-list", {href: ph_link}, ["img.product-contacts-icon", {src: "/product-hunt.svg"}], "Product Hunt"]]]],
       ["section.sections-container",
	["div.section-header", "Makers"],
	["ul.makers-container", ...makers.map(maker => makerCard(maker))]]];

const productPage = (products) => buildPage(product(products));

const productListingPage = (products) => buildPage(productListing(products));

export { productPage, productListingPage };
