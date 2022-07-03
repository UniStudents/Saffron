import https from "https";

export interface AxiosConfig {
    httpsAgent?: https.AgentOptions
    timeout: number,
    url?: string,
    method?: string
    responseType: string,
    responseEncoding: string
}