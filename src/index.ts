export {Article} from "./components/article";
export {Utils} from "./components/Utils";
export {Job} from "./components/job"
export {Source} from "./components/source"
export {Instructions} from "./components/instructions";
export {Saffron} from "./saffron";
export {Serializer, pack, unpack} from "./utils/serializer.util";
export {DynamicSourceFile} from "./components/DynamicSourceFile";
export {RequestsResult, SourceFile, ParserResult, SourceScrape, MergedConfig, ConfigType} from "./components/types"

// TODO: Add source file templates
//   A template folder, where a source file can extend to. Will contain the same fields
//   as a source file, but not all fields are required.
// TODO: Add debug mode, where file cache exists and if already fetched then do not repeat the request

