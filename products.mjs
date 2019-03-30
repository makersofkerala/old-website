import * as z from './z.mjs';

import  { buildPage } from "./common.mjs";

const page3 = products => ["div.product-section",
			   ["div.logo products-section-logo",["a", {href: "https://makersofkerala.com/"},["img", {alt: "Makers of Kerala Logo", src: "/logo2.svg"}]],
			    ["h1.products-heading", ["span.light","Makers"], ["em","of"], "Kerala"]],
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



const page = products => ["div.product-section",
			  ["header.nav-section",["div.logo nav-section-logo",["img", {alt: "Makers of Kerala Logo", src: "/logo2.svg"}],
						 ["h1.products-heading", ["span.light","Makers"], ["em","of"], "Kerala"]],["nav",
															   ["ul.nav-list",["li",["a", {href: "https://producthunt.com"}, "Products"]], ["li",["a",  {href: "https://producthunt.com"}, "Makers"]], ["li",["a", {href: "https://producthunt.com"}, "Hackathons"]], ["li",["a", {href: "https://producthunt.com"}, "Events"]], ["li",["a",  {href: "https://producthunt.com"}, "Resources"]],]]],
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
			  ],
			  ["footer",
			   ["section.sign-up-section footer-section",["div.section-header footer-section-header", "sign up"], ["p.sign-up-helper", "Get the latest news from Makers of Kerala."],["div.signup-button-container",["a.whatsapp-group signup-button", {href:"https://chat.whatsapp.com/HufqsS5FLgJ9DHRRNSUfrc"},"Join our Whatsapp Group"],["a.telegram-broadcast signup-button", {href:"https://t.me/makersofkerala"},"Join our Telegram Broadcast"],],],
			   ["section.follow-us-section footer-section",["div.section-header footer-section-header", "Follow us on"],
			    ["div.social-media-icons footer-section",["a.social-icon", {href:"https://instagram.com/makersofkerala"}, ["img", {src: "/instagram.svg"}]],
			     ["a.social-icon", {href:"https://twitter.com/makersofkerala"}, ["img", {src: "/twitter.svg"}]],
			     ["a.social-icon", {href:"https://facebook.com/makersofkerala"}, ["img", {src: "/facebook.svg"}]],],],
			   ["section.copyright-section", ["div","© 2018"],["div","Made by", ["a.studiobofa-link", {href: "https://studiobofa.com"},"Studiobofa"]]]]];

const website = (products) => buildPage(page(products));

export { website };
