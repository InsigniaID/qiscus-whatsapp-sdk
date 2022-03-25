import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { HTTPError, ReadError, RequestError } from "./exception";

interface HTTPClientConfig {
  baseURL?: string;
  defaultHeaders?: any;
}

export default class HTTPClient {
  private instance: AxiosInstance;
  private config: HTTPClientConfig;

  constructor(config: HTTPClientConfig) {
    this.config = config;
    const { baseURL, defaultHeaders } = config;
    this.instance = axios.create({
      baseURL,
      headers: Object.assign({}, defaultHeaders),
    });

    this.instance.interceptors.response.use(
      (res) => res,
      (err) => Promise.reject(this.wrapError(err))
    );
  }

  public async post<T>(
    url: string,
    body?: any,
    config?: Partial<AxiosRequestConfig>
  ): Promise<T> {
    const res = await this.instance.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        ...(config && config.headers),
      },
      ...config,
    });

    return res.data;
  }

  private wrapError(err: AxiosError): any {
    return err.response;
  }
}
