import * as z from './z.mjs';

import  { buildPage, header, placeholderMakerCard } from "./common.mjs";

const productCard = ({id = "N/A", title = "Untitled", description = "Description missing", link = "", logo = "logo.png"}) => {
    
      return ["li.product-card",
       ["a", {href: "/product/" + id + ".html"},
	["div.product-block",
	 ["div.product-logo", ["img", {src: logo, alt: "Logo of " + title}]],
	 ["div.product-details", ["div.product-name", title], ["div.product-description", description]]]]];

}

const productListing = products => ["div.product-section",
				   header("products"),
				   ["ul.products-list", ...products.map(p => productCard(p))]];

const productDetails = ({logo = "N/A", title = "N/A", description = "N/A", website = "N/A"}) => ["div.product-details-container",
								 ["div.product-name-details",
								  ["div.product-image-container", ["img", {src: logo, alt: "Logo for " + title}]],
								  ["div.product-text-content",
								   ["h2", title],
								   ["h3.product-description", description]]],
								 ["div.view-product-button", ["a", {href: website}, "View Product ↗︎"]]];

const contacts = ({mail = "N/A", twitter_link = "N/A", location = "N/A", ph_link = "N/A"}) =>
      ["ul.product-contacts",
       ["li", ["span.contact-list", ["img.product-contacts-icon", {src: "/location.svg"}], location]],
       ["li", ["a.contact-list", {href: "mailto:" + mail}, ["img.product-contacts-icon", {src: "/mail.svg"}], "Mail"]],
       ["li", ["a.contact-list", {href: twitter_link}, ["img.product-contacts-icon", {src: "/twitter1.svg"}], "Twitter"]],
       ["li", ["a.contact-list", {href: ph_link}, ["img.product-contacts-icon", {src: "/product-hunt.svg"}], "Product Hunt"]]];

const productContainer = (product) => ["div.product-head", productDetails(product), contacts(product)];

const makerListing = ({ makers }) => ["section.sections-container",
				  ["div.section-header", "Makers"],
				  ["ul.makers-container", ...makers.map(maker => placeholderMakerCard(maker))]];

const productView = (product) => ["div.product-section", header("products"), productContainer(product), makerListing(product)]; 

const productPage = (product) => buildPage(productView(product));

const productListingPage = (products) => buildPage(productListing(products));

export { productPage, productListingPage };
