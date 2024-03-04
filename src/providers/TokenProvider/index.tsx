import { TokenContextData } from '../../@types/providerTypes';
import { useToken } from '../../hooks/useToken';
import { TokenContext } from './TokenContext';

type TokenProviderProps = {
  children: React.ReactNode;
};

export default function TokenProvider({ children }: TokenProviderProps) {
  const { token, setToken } = useToken();

  const value: TokenContextData = {
    token,
    setToken,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}
