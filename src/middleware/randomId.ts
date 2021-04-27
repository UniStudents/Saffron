import {customAlphabet} from "nanoid";

export default (prefix: string) => {
    let string = customAlphabet("1234567890qwertyuiopasdfghjklzxcvbnm", 40)
    let number = customAlphabet("123456789",8)
    return `${prefix}_${string()}${(( Date.now() * parseInt( number() ) ) / 100000).toString().substring(0, 6)}`

}