import { differenceInHours } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

export const hasPassed24Hours = (firebaseTimestamp: Timestamp) => {
  if (firebaseTimestamp === null || firebaseTimestamp === undefined) {
    return false;
  }

  const currentTime = Date.now();
  const firebaseDate = firebaseTimestamp.toDate();
  const hoursDifference = differenceInHours(currentTime, firebaseDate);

  return hoursDifference > 24;
};

export function dateToTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}
