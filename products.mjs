import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

const productListing = products => ["div.product-section",
			   header,
			   ["ul.products-list",
			    ["li.product-card",
			     ["a", {href: "https://t.me/makersofkerala"},
			      ["div.product-block",
			       ["div.product-logo", ["img", {src: "/product-logo.png"}]],
			       ["div.product-details", ["div.product-name", "Market Fox"], ["div.product-description", "Stashy of List is a curated list of useful tools"]],],
			      // ["div.product-makers", ["div.maker-label", "Makers"], ["div.makers-images", ["img", {src: "/avatar1.png"}], ["img", {src: "/avatar2.png"}], ]],
			     ]],["li.product-card",
				 ["a", {href: "https://t.me/makersofkerala"},
				  ["div.product-block",
				   ["div.product-logo", ["img", {src: "/product-logo.png"}]],
				   ["div.product-details", ["div.product-name", "Market Fox"], ["div.product-description", "Stashy of List is a curated list of useful tools"]],],
				  // ["div.product-makers", ["div.maker-label", "Makers"], ["div.makers-images", ["img", {src: "/avatar1.png"}], ["img", {src: "/avatar2.png"}], ]],
				 ]],["li.product-card",
				     ["a", {href: "https://t.me/makersofkerala"},
				      ["div.product-block",
				       ["div.product-logo", ["img", {src: "/product-logo.png"}]],
				       ["div.product-details", ["div.product-name", "Market Fox"], ["div.product-description", "Stashy of List is a curated list of useful tools"]],],
				      // ["div.product-makers", ["div.maker-label", "Makers"], ["div.makers-images", ["img", {src: "/avatar1.png"}], ["img", {src: "/avatar2.png"}], ]],
				     ]],["li.product-card",
					 ["a", {href: "https://t.me/makersofkerala"},
					  ["div.product-block",
					   ["div.product-logo", ["img", {src: "/product-logo.png"}]],
					   ["div.product-details", ["div.product-name", "Market Fox"], ["div.product-description", "Stashy of List is a curated list of useful tools"]],],
					  // ["div.product-makers", ["div.maker-label", "Makers"], ["div.makers-images", ["img", {src: "/avatar1.png"}], ["img", {src: "/avatar2.png"}], ]],
					 ]]]];



const product = products => ["div.product-section",
			  header,
			  ["div.product-head",["div.product-details-container",
					       ["div.product-name-details",["div.product-image-container", ["img", {src: "/product-logo.jpg"}]],
						["div.product-text-content", ["h2", "Product Name"],
						 ["a", {href: "http://link.goes.here"}, "http:link.goes.here"],
						 ["h3.product-description", "Product description goes here"]]], ["div.view-product-button", ["a", {href: "https://makersofkerala.com"}, "View Product ↗︎"]]],
			   ["ul.product-contacts",
			    ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/location.svg"}],"Location"]],
			    ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/mail.svg"}],"Email"]],
			    ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/twitter1.svg"}],"Twitter"]],
			    ["li", ["a.contact-list", {href: "https://producthunt.com"}, ["img.product-contacts-icon", {src: "/product-hunt.svg"}],"Producthunt"]],

			   ],],
			  ["section.sections-container", ["div.section-header", "Makers"],


			   ["ul.makers-container",
			    ["li.maker-card",
			     ["a", {href: "https://t.me/makersofkerala"},
			      ["div.maker-block",
			       ["div.maker-avatar", ["img", {src: "/avatar1.png"}]],
			       ["div.maker-details", ["div.maker-name", "Aslam Abbas"], ["div.maker-role", "Founder"]],],]],
			    ["li.maker-card",
			     ["a", {href: "https://t.me/makersofkerala"},
			      ["div.maker-block",
			       ["div.maker-avatar", ["img", {src: "/avatar2.png"}]],
			       ["div.maker-details", ["div.maker-name", "Shyjal Raazi"], ["div.maker-role", "Founder"]],],]],
			    ["li.maker-card",
			     ["a", {href: "https://t.me/makersofkerala"},
			      ["div.maker-block",
			       ["div.maker-avatar", ["img", {src: "/avatar1.png"}]],
			       ["div.maker-details", ["div.maker-name", "Aslam Abbas"], ["div.maker-role", "Founder"]],],]],
			   ],


			   // ["section", ["div.section-header", "Product Shots"],
			   // ["div.", ["img", {src: "/product-shot1.png"}], ["img", {src: "/product-shot2.png"}]]]
			  ]];

const productPage = (products) => buildPage(product(products));

const productListingPage = (products) => buildPage(productListing(products));

export { productPage, productListingPage };
