import * as z from './z.mjs';
import  { header, buildPage, footer } from "./common.mjs";

const parseDate = (date) => {
    
    const parsedDate = new Date(Date.parse(date));

    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});

    const month = monthFormat.format(parsedDate);
    
    return {day: parsedDate.getDate(), month, year: parsedDate.getFullYear()};

};

const eventBlock = ({day, month, title, venue}) => {
    
    return ["div.event-block",
	    ["div.event-date",
	     ["p.event-day", day],
	     ["p.event-month", month],
	     //  ["p.event-year", year]
	    ],
	    ["div.event-details",
	     ["div.event-name", title],
	     ["div.event-location",
	      ["img.location-icon", {alt: "location pin", src: "/location.svg"}], venue]],
	    ["div", "→ "]];

};

const genAcronym = (words) => {
    
    const firstCharacters = words.match(/\b(\w)/g);

    return firstCharacters.join('');

};

const event = ({title = "Untitled Event", from_date: date = new Date(), link = "", cover = "", venue = "N/A"}) => {

    const acronym = genAcronym(title);

    const { day, month } = parseDate(date);

    return ["li", ["a.event-board", {href: link},
		   cover ? ["img.event-cover", {src: cover}] : ["div.event-text-cover", acronym], eventBlock({day, month, title, venue})]];

};

const logo = ["div.logo",
	      ["a", { href: "https://makersofkerala.com"},["img", {alt: "Makers of Kerala Logo", src: "logo2.svg"}]],
	      ["h1", ["span.light","Makers"], ["em","of"], "Kerala"],
	      ["h2.website-description", "List of maker events happening all over Kerala"]];

const details = ["div.website-details", logo, footer];

const page = (events) => buildPage(["div.event-section", header("events"),
				    ["ul.event-list", ...events.map(evt => event(evt))]]);

export { page };
