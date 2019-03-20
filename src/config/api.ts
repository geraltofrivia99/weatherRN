const KEY = "939176055d8b4401a4a50606191803";
const URLS = "http://api.apixu.com/v1/";

interface Path {
  params: string;
  query: string;
}

async function request(method: string, path: Path, body?: any) {
  const headers: any = {
    "Content-Type": "application/json"
  };

  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(body); // eslint-disable-line no-param-reassign
  }
  const options = {
    headers,
    method,
    body
  };
  console.log(`${URLS}${path}`);
  const response = await fetch(
    `${URLS}${path.params}?key=${KEY}&q=${path.query}`,
    options
  );
  try {
    const json = await response.json();
    if (!response.ok) {
      console.log("response not ok");
      throw json;
    }
    // json.ok = true;
    return json;
  } catch (e) {
    console.log("catch response");
    return response;
  }
}

export const get = (path: Path) => request("GET", path);
