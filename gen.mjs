import fs from "fs";
import { website } from "./view.mjs";
import * as z from "./z.mjs";
import eventsDB from './db/2018-events.json';

const publicFolder = "./public/";

const buildWebsite = () => {

fs.writeFileSync(publicFolder + "index.html", website(eventsDB));

}

export { buildWebsite };