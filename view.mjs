import * as z from './z.mjs';

const event = ({title = "Untitled Event", location: {lat, long, venue}, date = "", url = ""}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    
    return ["li", ["a.event-board", {href: url},
        ["img.event-cover", {src:"cover.png"}],
        ["div.event-block",
         ["div.event-date", ["p.event-day", day], ["p.event-month", month], 
        //  ["p.event-year", year]
        ],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {alt: "location pin", src: "location.svg"}], venue]],
	    ["div", "→ "]]]];

};

const pastEvent = ({title = "Untitled Event", location: {lat, long, venue}, date = "", url = ""}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    
    return ["li", ["a.past-event-board", {href: url},
    
        // ["img.event-cover", {src:"cover.png"}],
        ["div.past-event-block",
        ["div.past-event-date", ["p.event-day", day], ["p.event-month", month], 
        // ["p.event-year", year]
    ],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {alt: "location pin", src: "location.svg"}], venue]],
	    ["div", "→ "]]]];

};

const page = (events) => ["div.website", 
// ["header#main", ["div.logo",["img", {alt: "Makers of Kerala Logo", src: "logo.svg"}],
// ["h1", ["span.light","Makers"], ["em","of"], "Kerala"]],
// ],
// ["h2.website-description", "List of events happening over all over Kerala"],

["div.main-sections",
["div.website-details",
["div.logo",["img", {alt: "Makers of Kerala Logo", src: "logo.svg"}],
["h1", ["span.light","Makers"], ["em","of"], "Kerala"],
["h2.website-description", "List of maker events happening all over Kerala"]],
["div", ["div.newsletter-signup",
["div.sign-up-pull", "Sign up for our Newsletter"],
["div.sign-up-helper","Get the latest news from Makers of Kerala."],
["a.whatsapp-group.signup-button", {href: "https://chat.whatsapp.com/HufqsS5FLgJ9DHRRNSUfrc"}, "Join our Whatsapp Group"],
["a.telegram-broadcast.signup-button", {href: "https://t.me/makersofkerala"}, "Join our Telegram Broadcast"]],
["div.copyright", ["div", "© 2018"],["div", "Made by ", ["a.studiobofa", {href: "https://studiobofa.com"}, "Studio", ["strong", "BOFA"]]]]]],

// ["ul.past-events-collection", ...events.map(eObj => pastEvent(eObj))],
["ul.event-list", ...events.map(eObj => event(eObj))],
["div#map.map", {style: {position: "relative"}}, ["img", {src: "map.svg", data: {points: "[" + events.map(({location: {lat, lon}}) => `[${lat},${lon}]`) + "]"}}]]],
// ["footer", "test"]
];


const website = (events) => z.doc([["meta", {name: "title", "content": "Makers of Kerala: Uniting product makers all over Kerala, India"}],
["meta", {name: "description", content: "A website to unite the daring makers in the digital domain all across the Kerala, India. Makers of Kerala is designed as a platform that catalogues the team, stack, and chronicles the timeline of startups from Kerala. It's overarching goal is to chronicle the unfolding narrative of the startup scene of Kerala."}],
["meta", {charset: "utf-8"}],
["meta", {name: "viewport", content: "width=device-width, initial-scale=1"}],
["link", {rel: "shortcut icon", type: "image/png", href: "/favicon-16.png", sizes: "16x16"}],
["link", {rel: "shortcut icon", type: "image/png", href: "/favicon-32.png", sizes: "32x32"}],
["title", "Makers of Kerala - Maker Calendar"],
["link", {href: "https://fonts.googleapis.com/css?family=Work+Sans:400,600", rel:"stylesheet"}],
z.css("ui.css"),
["script", {src: "ui.js", type: "text/javascript"}]], [page(events)]);

export { website };
