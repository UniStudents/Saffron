import {customAlphabet} from "nanoid";

/**
 * Generates a random id and add prefix at the start
 * @param prefix The prefix (Optional)
 */
export default function randomId(prefix: string = ""): string {
    let string = customAlphabet("1234567890qwertyuiopasdfghjklzxcvbnm", 40)
    let number = customAlphabet("123456789", 8)
    return `${prefix}_${string()}${((Date.now() * parseInt(number())) / 100000).toString().substring(0, 6)}`

}