export function isJSON(data: string): boolean {
    try {
        JSON.parse(data);
        return true;
    } catch (error) {
        return false;
    }
}

export function isXML(data: string): boolean {
    return data.trim().startsWith('<');
}
