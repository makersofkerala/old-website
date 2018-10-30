import fs from "fs";
import { website } from "./view.mjs";
import * as z from "./z.mjs";
import eventsDB from './db/2018-events.json';

fs.writeFileSync("./index.html", z.serialize(website(eventsDB)));

