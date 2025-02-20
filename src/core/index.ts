import MyRequest from "./request";

class Axios {
  private params!: AxiosParams;
  constructor() {}

  static create(req_params: AxiosParams): MyRequest {
    const request = new MyRequest(req_params);

    return request;
  }

  static get(url: string, params?: Pick<AxiosParams, "params">) {
    return Axios.create({
      baseURL: url,
      method: "GET",
      params,
    });
  }

  static post(url: string, data?: Pick<AxiosParams, "data">) {
    return Axios.create({
      baseURL: url,
      method: "POST",
      data,
    });
  }
}

Axios.get("http://localhost:8080/get");
Axios.post("http://localhost:8080/post");
const axios = Axios.create({
  baseURL: "http://localhost:8080",
  method: "GET",
  params: {
    a: 1,
    b: 2,
  },
  data: {
    c: 3,
    d: 4,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
axios.get("/get", {
  params: {
    a: 1,
    b: 2,
  },
});
axios.post();

export default Axios;
