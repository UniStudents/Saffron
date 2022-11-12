import {customAlphabet} from "nanoid";

/**
 * Generates a random id and add prefix at the start
 * @param prefix The prefix (Optional)
 */
export function randomId(prefix: string = ""): string {
    let string = customAlphabet("1234567890qwertyuiopasdfghjklzxcvbnm", 16);
    return `${prefix}_${string()}`;

}