import fs from "fs";
import { website } from "./view.mjs";
import * as z from "./z.mjs";
import eventsDB from './db/2018-events.json';

const publicFolder = "./public/";

fs.writeFileSync(publicFolder + "index.html", z.serialize(website(eventsDB)));

