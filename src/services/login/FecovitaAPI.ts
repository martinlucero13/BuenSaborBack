import axios, { AxiosInstance } from 'axios';
import { config } from "./config";

export default class FecovitaAPIService {
    baseUrl: string;
    timeout: number;
    private _instance: AxiosInstance;
    constructor() {
        this.baseUrl = config.fecovitaAPiUrl;
        this.timeout = config.requestTimeout;
        this._instance = axios.create({
            baseURL: this.baseUrl,
            timeout: this.timeout,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    get defaults() {
        return this._instance.defaults;
    }
    async get(endpoint: string) {
        const response = await this._instance.get(endpoint);
        return response.data;
    }
    async post(endpoint: string, data: string) {
        const response = await this._instance.post(endpoint, data);
        return response.data;
    }
    async put(endpoint: string, data: string) {
        const response = await this._instance.put(endpoint, data);
        return response.data;
    }
    async delete(endpoint: string) {
        const response = await this._instance.delete(endpoint);
        return response.data;
    }
}