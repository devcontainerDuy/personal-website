import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export interface ApiResponse<T = void> {
    data: T;
    message: string;
    status: number;
    success: boolean;
}

const axiosConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true, // Tuỳ chọn nếu dùng cookie
};

class HttpClient {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create(axiosConfig);

        // Request interceptor
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => this._handleRequest(config),
            (error: AxiosError) => this._handleError(error)
        );

        // Response interceptor
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => this._handleResponse(response),
            (error: AxiosError) => this._handleError(error)
        );
    }

    // Xử lý trước khi gửi request, thêm authorization header nếu có token
    private _handleRequest = (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("access_token");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    };

    // Xử lý sau khi nhận response
    private _handleResponse = (response: AxiosResponse) => {
        const responseData: ApiResponse = {
            data: response.data,
            message: response.data?.message || "",
            status: response.status,
            success: response.status >= 200 && response.status < 300,
        };

        return { ...response, data: responseData };
    };

    private _handleError = (error: AxiosError): Promise<never> => {
        if (error.response) {
            // Định nghĩa message theo kiểu string. TypeScript không chắc chắn rằng có thuộc tính message trong response ( unknown hoặc {} )
            const data = error.response.data as { message?: string };
            const status = error.response.status;
            const message = data?.message || error.message;

            if (status === 401) {
                localStorage.removeItem("access_token");
                window.location.href = "/login";
            }

            return Promise.reject({
                message,
                status,
                data,
            });
        }

        if (error.request) {
            return Promise.reject({
                message: "Không thể kết nối đến máy chủ",
                status: 0,
            });
        }

        return Promise.reject({
            message: error.message,
            status: -1,
        });
    };

    public get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> => {
        return this.instance.get(url, config);
    };

    public post = <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> => {
        return this.instance.post(url, data, config);
    };

    public put = <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> => {
        return this.instance.put(url, data, config);
    };

    public patch = <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> => {
        return this.instance.patch(url, data, config);
    };

    public delete = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> => {
        return this.instance.delete(url, config);
    };
}

export const apiClient = new HttpClient();
