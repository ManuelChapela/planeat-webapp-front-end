import { useCallback, useState } from 'react';

async function apiFetch(
  URL,
  method = 'GET',
  body = '',
  headers = {
    'Content-Type': 'application/json',
  },
) {
  const request = new Request(URL, {
    headers,
    method,
    body,
  });
  console.log('ANTES DE ENTRAR', request);
  const response = await fetch(request);
  if (response.ok) return await response.json();
  else throw await response.json();
}
export default function useFetch() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null,
  });
  const fetchData = useCallback(async function (url, method, body, headers) {
    console.log('ENTRANDO');
    /*     const URL = 'http://localhost:5000/signup';
    const METHOD = 'post'; */
    body = JSON.stringify(body);
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        error: null,
        data: null,
      });
      console.log('llegando');
      const result = await apiFetch(url, method, body, headers);
      console.log('result', result);
      setFetchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
        data: result,
      });
      return result;
    } catch (error) {
      console.log('ERROR', error);
      setFetchState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        error,
        data: null,
      });
    }
  }, []);
  return [fetchState, fetchData];
}