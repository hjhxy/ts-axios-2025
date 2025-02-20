import qs from "query-string";

export function mergeGetParams(
  baseParams: RequestParams,
  newParams: RequestGetParams
): RequestParams {
  const lastparams = {
    ...baseParams,
  };

  const parsed = qs.parseUrl(newParams.url);
  const query = {
    ...parsed.query,
    ...newParams.params,
  };

  lastparams.params = { ...lastparams.params, ...newParams.params };
  lastparams.url = lastparams.baseURL + parsed.url + "?" + qs.stringify(query);
  lastparams.method = newParams.method;
  lastparams.headers = { ...lastparams.headers, ...newParams.headers };
  return lastparams;
}
