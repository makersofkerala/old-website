import * as z from './z.mjs';
import  { header, buildPage, footer } from "./common.mjs";

const page = (events) => buildPage(["div.resource-page", "Hello"]);

export { page };
