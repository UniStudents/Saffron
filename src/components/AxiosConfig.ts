import https from "https";
import {Axios} from "axios";

export interface AxiosConfig {
    httpsAgent?: https.AgentOptions
    timeout: number,
    url?: string,
    method?: string

}