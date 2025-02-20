interface AxiosParams {
  baseURL: string;
  timeout?: number;
  params?: {
    [key: string]: any;
  };
  data?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: string;
  };
  [key: string]: any;
}

type RequestParams = AxiosParams;
type RequestGetParams = {
  params?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: string;
  };
  [key: string]: any;
};
