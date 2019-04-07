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
  ["div.maker-avatar", ["img", {src: "/avatar.svg", alt: "Avatar of"}]],
  ["div.maker-details",
  ["div.maker-name", "Jovis Joseph"],
  ["div.maker-role", "Maker"]]]]],
  ["li.maker-card",
  ["a", {href: "#makers/"},
  ["div.maker-block",
  ["div.maker-avatar", ["img", {src: "/avatar.svg", alt: "Avatar of"}]],
  ["div.maker-details",
  ["div.maker-name", "Jovis Joseph"],
  ["div.maker-role", "Maker"]]]]]

]];

const maker = () => ["div.maker-section", header("makers"), "Maker details here"];

const makerPage = (products) => buildPage(maker(products));

const makerListingPage = (products) => buildPage(makerListing(products));

export { makerPage, makerListingPage };
