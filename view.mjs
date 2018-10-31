import * as z from './z.mjs';

const event = ({title = "Untitled Event", location: {lat, long, venue}, date = "", url = ""}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    
    return ["a.event-block", {href: url},
	    ["div.event-date", ["p.event-day", day], ["p.event-month", month], ["p.event-year", year]],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {alt: "location pin", src: "location.svg"}], venue]],
	    ["div", "→ "]];

};

const page = (events) => ["div.website", 
["header#main", ["div.logo",["img", {alt: "Makers of Kerala Logo", src: "logo.svg"}],
["h1", ["span.light","Makers"], ["em","of"], "Kerala"]],
["h2", "Events worth attending"]],
["ul", ["li", ...events.map(eObj => event(eObj))]]];


const website = (events) => z.doc([["meta", {name: "title", "content": "Makers of Kerala: Uniting product makers all over Kerala, India"}],
["meta", {name: "description", content: "A website to unite the daring makers in the digital domain all across the Kerala, India. Makers of Kerala is designed as a platform that catalogues the team, stack, and chronicles the timeline of startups from Kerala. It's overarching goal is to chronicle the unfolding narrative of the startup scene of Kerala."}],
["meta", {charset: "utf-8"}],
["title", "Makers of Kerala - Maker Calendar"],
["link", {href: "https://fonts.googleapis.com/css?family=Work+Sans:400,600", rel:"stylesheet"}],
z.css("ui.css")], [page(events)]);

export { website };
