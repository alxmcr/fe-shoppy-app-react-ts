import { FirebaseDBProductServiceImpl } from '../api/FirebaseProductServiceImpl';
import { FIREBASE_MAIN_COLLECTION } from '../constants/constants-firebase';

export const isTokenStoredValid = async (tokenStored = '') => {
  if (tokenStored === null || tokenStored === undefined || tokenStored === '') {
    return false;
  }

  const client = new FirebaseDBProductServiceImpl(FIREBASE_MAIN_COLLECTION);
  const isValid = await client.isTokenValidToJoinList(tokenStored);

  return isValid;
};
