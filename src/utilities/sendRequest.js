const headersPredef = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function sendRequest({ url, method, body, headers }) {
  console.log(url, method, body, headers);
  console.log(JSON.stringify(body));
  const newHeaders = { ...headersPredef, ...headers };
  console.log("HEADERS",newHeaders)
  const response = await fetch(url, {
    method,
    headers: newHeaders,
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw await response.json();
  } else {
    return await response.json();
  }
}
