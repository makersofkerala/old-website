import * as z from './z.mjs';
import  { header, buildPage } from "./common.mjs";

const event = ({title = "Untitled Event", from_date: date = new Date(), link = "", cover = "", venue}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    var firstCharacters = title.match(/\b(\w)/g);
    var acronym = firstCharacters.join('');

    return ["li", ["a.event-board", {href: link},
    cover ? ["img.event-cover", {src: cover}] : ["div.event-text-cover", acronym],

        ["div.event-block",
         ["div.event-date", ["p.event-day", day], ["p.event-month", month],
        //  ["p.event-year", year]
        ],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {alt: "location pin", src: "/img/location.svg"}], venue]],
	    ["div", "→ "]]]];

};

const details = ["div.website-details",
		 ["div.logo", ["img", {alt: "Makers of Kerala Logo", src: "logo2.svg"}],
		  ["h1", ["span.light","Makers"], ["em","of"], "Kerala"],
		  ["h2.website-description", "List of maker events happening all over Kerala"]],
		 ["div", ["div.newsletter-signup",
			  ["div.sign-up-pull", "Sign up for our Newsletter"],
			  ["div.sign-up-helper","Get the latest news from Makers of Kerala."],
			  ["a.whatsapp-group.signup-button", {href: "https://chat.whatsapp.com/HufqsS5FLgJ9DHRRNSUfrc"}, "Join our Whatsapp Group"],
			  ["a.telegram-broadcast.signup-button", {href: "https://t.me/makersofkerala"}, "Join our Telegram Broadcast"]],
		  ["div.follow-us-block",["div.follow-pull", "Follow Us On"],["a.social-icon",{href: "https://instagram.com/makersofkerala"}, ["img", {src: "instagram.svg"}]],["a.social-icon",{href: "https://twitter.com/makersofkerala"}, ["img", {src: "twitter.svg"}]],["a.social-icon",{href: "https://facebook.com/makersofkerala"}, ["img", {src: "facebook.svg"}]]],
		  ["div.copyright", ["div", "© 2018"],["div", "Made by ", ["a.studiobofa-link", {href: "https://studiobofa.com"}, "Studio", ["strong", "BOFA"]]]]]];

const page = (events) => buildPage(["div.event-section",
				    header,

				     ["ul.event-list", ...events.map(eObj => event(eObj))]]);


export { page };
