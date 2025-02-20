import { mergeGetParams } from "../utils/request";

class MyRequest {
  private params: RequestParams;
  constructor(req_params: RequestParams) {
    this.params = req_params;
  }

  get(url: string, get_params: RequestGetParams) {
    return new Promise((resolve, reject) => {
      const params = mergeGetParams(this.params, get_params);

      const xhr = new XMLHttpRequest();
      xhr.open("GET", params.url, true);

      if (params.headers) {
        Object.keys(params.headers).forEach((key) => {
          xhr.setRequestHeader(key, params.headers![key]);
        });
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else if (xhr.readyState === 4) {
          reject(new Error(`HTTP request failed with status ${xhr.status}`));
        }
      };
      xhr.send();
    });
  }
  post() {}
  put() {}
  delete() {}
}

export default MyRequest;
