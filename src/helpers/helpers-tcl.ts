// Source functions: https://github.com/the-collab-lab/shopping-list-utils
// Reason: some problems with unit testing with React Testing Library
// Error:
// Test suite failed to run:
// `Cannot find module '@the-collab-lab/shopping-list-utils'`

import * as words from './words.json';

// the below is heavily based on https://andrew.hedges.name/experiments/diceware/

/**
 * Gets a random integer *exclusive* of the max.
 * @see: https://www.rempe.us/diceware/
 */
const getRandomIntInRange = (min: number, max: number) => {
  const rand = new Uint32Array(1);
  const skip = 0x7fffffff - (0x7fffffff % max);
  let result: number;

  if (((max - 1) & max) === 0) {
    crypto.getRandomValues(rand);
    return rand[0] & (max - 1);
  }

  do {
    crypto.getRandomValues(rand);
    result = rand[0] & 0x7fffffff;
  } while (result >= skip);

  return (result % max) + min;
};

/**
 * Generates a token of three space-separated words.
 * @see: http://stackoverflow.com/a/1527820/11577
 */
export const generateToken = () => {
  const phrase: string[] = new Array(3);

  for (let i = 0; i < 3; i += 1) {
    phrase[i] = words[getRandomIntInRange(0, words.length)];
  }

  return phrase.join(' ');
};

/**
 * Calculate a weighted estimate for the interval of days until the next purchase.
 * Current purchase a tiny bit less weight than all previous purchases
 */
export const calculateEstimate = (
  previousEstimate: number = 14, // The last estimated purchase interval
  daysSinceLastTransaction: number, // The number of days since the item was added to the list or last purchased
  totalPurchases: number, // Total number of purchases for the item
): number => {
  // Not enough data if an item has been purchased 1 time,
  // just set the estimate based on when it was added to the list
  if (totalPurchases < 2) return daysSinceLastTransaction;

  // This calculates how many days should have passed based on
  // the previous estimate between purchases and the total number of purchased
  const previousFactor = previousEstimate * totalPurchases;

  // This calculates how many days should have passed based on
  // the interval between the most recent transactions
  // Subtract 1 here to exclude the current purchase in this factor
  const latestFactor = daysSinceLastTransaction * (totalPurchases - 1);

  // Divisor is used to find the average between the two factors
  // Multiplied by 2 between we will add 2 factors together
  // Subtract 1 here to lower weight of the current purchase in this factor
  const totalDivisor = totalPurchases * 2 - 1;

  //Calculate the average interval between the previous factor and the latest factor
  return Math.round((previousFactor + latestFactor) / totalDivisor);
};
