import * as z from './z.mjs';

import  { buildPage, header } from "./common.mjs";

const makerCard = ({id, title, description, link, logo}) =>
      ["li.maker-card",
       ["a", {href: "/maker/" + id + ".html"},
	["div.maker-block",
	 ["div.maker-avatar", ["img", {src: logo, alt: "Avatar of " + title}]],
	 ["div.maker-details", ["div.maker-name", title], ["div.maker-role", description]]]]];

const makerListing = (makers = []) => ["div.maker-section", header("makers"),


["ul.makers-list",
  ["li.maker-card",
  ["a", {href: "#makers/"},
  ["div.maker-block",
  ["div.maker-avatar", ["img", {src: "/avatar.1png", alt: "Avatar of"}]],
  ["div.maker-details",
  ["div.maker-name", "Jovis Joseph"],
  ["div.maker-role", "Maker"]]]]],
  ["li.maker-card",
  ["a", {href: "#makers/"},
  ["div.maker-block",
  ["div.maker-avatar", ["img", {src: "/avatar2.png", alt: "Avatar of"}]],
  ["div.maker-details",
  ["div.maker-name", "Jovis Joseph"],
  ["div.maker-role", "Maker"]]]]]

]];

const maker = () =>   ["div.maker-section",

   ["div.maker-head",
["div.maker-details-container",
["div.maker-name-details",
["div.maker-image-container", ["img", {src: "/avatar3.jpg", alt: "Logo for"}]],
["div.maker-text-content",
["h2", "Jovis Joseph"],
 ["div.maker-website-link",["a", {href: "https://https://mfy.im"},"MFY"]],

 ["h3.maker-role", "Designer"]]],
["div.view-website-button", ["a", {href: "website"}, "Personal Website ↗︎"]]],
["ul.maker-contacts",
["li", ["span.contact-list", ["img.product-contacts-icon", {src: "/location.svg"}],"Thrissur"]],
["li", ["a.contact-list", {href: "mail"}, ["img.product-contacts-icon", {src: "/mail.svg"}], "Mail"]],
["li", ["a.contact-list", {href: "twitter_link"}, ["img.product-contacts-icon", {src: "/twitter1.svg"}], "Twitter"]],
["li", ["a.contact-list", {href: "test"}, ["img.product-contacts-icon", {src: "/instagram2.svg"}], "Instagram"]]]],
   ["section.sections-container",
["div.section-header", "Products"],
["ul.product-makers-container",

["li.product-card maker-product-card",
 ["a", {href: "https://roadsapp.co"},
["div.product-block",
["div.product-logo", ["img", {src: "/product-logo.jpg"}]],
["div.product-details", ["div.product-name", "Roads"], ["div.product-description", "The rider's network."]]]]]


]]];

const makerPage = (products) => buildPage(maker(products));

const makerListingPage = (products) => buildPage(makerListing(products));

export { makerPage, makerListingPage };
