import React from 'react';
import { KEY_TOKEN, LoadingStates } from '../constants/constants-app';

export const useToken = () => {
  const [token, setToken] = React.useState('');
  const [statusCheckingToken, setStatusCheckingToken] = React.useState(
    LoadingStates.IDLE,
  );
  const [errorToken, setErrorToken] = React.useState<Error | null>(null);

  React.useEffect(() => {
    setStatusCheckingToken(LoadingStates.PENDING);
    try {
      const tokenStored = localStorage.getItem(KEY_TOKEN);

      if (tokenStored !== null && tokenStored !== undefined) {
        if (tokenStored !== '') {
          setToken(tokenStored);
        }
      }

      setStatusCheckingToken(LoadingStates.SUCCESS);
    } catch (error) {
      setStatusCheckingToken(LoadingStates.ERROR);

      if (error instanceof Error) {
        setErrorToken(error);
      }
    }
  }, []);

  return { token, setToken, errorToken, statusCheckingToken };
};
