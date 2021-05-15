import { useCallback, useState } from 'react';
import sendRequest from '../utilities/sendRequest';

export default function useFetch() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async function ({ url, method, body, headers }) {
    try {
      setFetchState({
        isLoading: true,
        isSuccess: false,
        isFailed: false,
        error: null,
        data: null,
      });
      const result = await sendRequest({ url, method, body, headers });
      setFetchState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        error: null,
        data: result,
      });
      return result;
    } catch (error) {
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
