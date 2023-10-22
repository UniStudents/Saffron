export type {ConfigType} from "./components/config"
export {Article} from "./components/article";
export {Utils} from "./components/Utils";
export {Job} from "./components/job"
export {Source} from "./components/source"
export {Instructions} from "./components/instructions";
export {Saffron} from "./saffron";
export {Serializer, pack, unpack} from "./middleware/serializer";

// TODO: Dynamic source files
//      - Each one should extend the DynamicSourceFile class
//      - A json file will then be mentioning inside "scrape" the id of that class
//      - For each dynamic source file, saffron will go and assign that specific class
//      - We have to modify scheduler to read source files even if not main
//      - We have to modify grid, to not send the source file, but instead send the name of thr source file to trigger the scraping

// TODO: Add source file templates
//   A template folder, where a source file can extend to. Will contain the same fields
//   as a source file, but not all fields are required.

