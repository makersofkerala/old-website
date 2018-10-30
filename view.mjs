import * as z from './z.mjs';

const event = ({title = "Untitled Event", location: {lat, long, venue}, date = "", link = ""}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    
    return ["a.event-block", {href: link},
	    ["div.event-date", ["time.event-day", day], ["time.event-month", month], year],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {src: "location.svg"}], venue]],
	    ["div", "→ "]];

};

const page = (events) => ["div.website", 
			  ["header", ["img.logo", {src: "logo.svg"}]],
			  ["ul", ["li", ...events.map(eObj => event(eObj))]]];


const website = (events) => z.doc([["meta", {charset: "utf-8"}], z.css("ui.css")], [page(events)]);

export { website };
