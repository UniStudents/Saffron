export type {ConfigType} from "./components/config"
export {Article} from "./components/article";
export {Utils} from "./components/Utils";
export {Job} from "./components/job"
export {Source} from "./components/source"
export {Instructions} from "./components/instructions";
export {Saffron} from "./saffron";
export {Serializer, pack, unpack} from "./middleware/serializer";

// TODO: Add source file templates
//   A template folder, where a source file can extend to. Will contain the same fields
//   as a source file, but not all fields are required.