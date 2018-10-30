import * as z from './z.js';


z.render("#app", (state) => ["div.website", 
["header", ["img.logo", {src: "logo.svg"}]],

["ul", 
    ["li", 
    ["a.event-block",{href: "https://event.com/event"},
    ["div.event-date", ["time.event-day", "4"], ["time.event-month", "Oct"],""],
    ["div.event-details",  ["div.event-name", "Makers Fest"],
    ["div.event-location",["img.location-icon", {src: "location.svg"}], "Kanjirappilly"],
    ],
    ["div", "→ "]]],

    ["li", 
    ["a.event-block",{href: "https://event.com/event"},
    ["div.event-date", ["time.event-day", "4"], ["time.event-month", "Oct"],""],
    ["div.event-details",  ["div.event-name", "Hidden Tales"],
    ["div.event-location",["img.location-icon", {src: "location.svg"}], "Kochi"],
    ],
    ["div", "→ "]]],

    ["li", 
    ["a.event-block",{href: "https://event.com/event"},
    ["div.event-date", ["time.event-day", "4"], ["time.event-month", "Oct"],""],
    ["div.event-details",  ["div.event-name", "Event 1"],
    ["div.event-location",["img.location-icon", {src: "location.svg"}], ["div.event-place", "Location"]],
    ],
    ["div", "→ "]]],


]]);
