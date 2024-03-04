import React from 'react';
import { TokenContextData } from '../../@types/providerTypes';

const initialTokenContext: TokenContextData = {
  token: '',
  setToken: () => {},
};

export const TokenContext = React.createContext(initialTokenContext);
