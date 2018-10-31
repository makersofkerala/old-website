import * as z from './z.mjs';

const event = ({title = "Untitled Event", location: {lat, long, venue}, date = "", link = ""}) => {

    const parsedDate = new Date(Date.parse(date));
    const monthFormat = new Intl.DateTimeFormat("en-US", {month: "short"});
    const month = monthFormat.format(parsedDate);
    const {day, year} = {day: parsedDate.getDate(), year: parsedDate.getFullYear()};
    
    return ["a.event-block", {href: link},
	    ["div.event-date", ["time.event-day", day], ["time.event-month", month], year],
	    ["div.event-details",  ["div.event-name", title],
	     ["div.event-location", ["img.location-icon", {alt: "location pin", src: "location.svg"}], venue]],
	    ["div", "→ "]];

};

const page = (events) => ["div.website", 
["header#main", ["div.logo",["img", {alt: "Makers of Kerala Logo", src: "logo.svg"}],
["h1", ["span.light","Makers"], ["em","of"], "Kerala"]],
["h2", "Events worth attending"]],
["ul", ["li", ...events.map(eObj => event(eObj))]]];


const website = (events) => z.doc([["meta", {title: "Makers of Kerala"}],
["meta", {description: "A website to unite the daring makers in the digital domain all across the Kerala, India. Makers of Kerala is designed as a platform that catalogues the team, stack, and chronicles the timeline of startups from Kerala. It's overarching goal is to chronicle the unfolding narrative of the startup scene of Kerala."}],
["meta", {charset: "utf-8"}],
["link", {href: "https://fonts.googleapis.com/css?family=Work+Sans:400,600", rel:"stylesheet"}],
z.css("ui.css")], [page(events)]);

export { website };
