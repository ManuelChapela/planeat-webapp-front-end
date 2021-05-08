const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function sendRequest({ url, method, body }) {
  console.log('TEST2', url, method, body);
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw (await response.json());
  }
  else {
    return await response.json();
  }
}
