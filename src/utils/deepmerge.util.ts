import _ from "lodash";

export function deepmerge<T>(a: T, b: T): T {
    return _.mergeWith({}, a, b, (o, s) => {
        if (typeof o == 'object' && !Array.isArray(o) && typeof o != 'function' && typeof s != 'function')
            return deepmerge(s, o);
        return s != null ? s : o;
    });
}