/**
 * Generates a random id and add prefix at the start
 * @param prefix The prefix
 * @param length
 */
export function randomId(prefix: string, length: number = 16): string {
    const characters = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let randomId = "";

    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return `${prefix}_${randomId}`;
}