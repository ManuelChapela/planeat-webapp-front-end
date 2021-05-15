const headersPredef = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function sendRequest({ url, method, body, headers }) {
  const newHeaders = { ...headersPredef, ...headers };
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
