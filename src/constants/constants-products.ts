import { FrequencyTimeToBuy, StatusProduct } from '../@types/appTypes';

export const DEFAULT_DAYS_PREVIOUS_ESTIMATED = 14;

// Frequency times
export const frequencyNames = {
  SOON: 'Soon',
  KIND_OF_SOON: 'Kind of soon',
  NOT_SOON: 'Not soon',
};

export const SOON: FrequencyTimeToBuy = {
  id: 'fq-time-001',
  value: 7,
  text: frequencyNames.SOON,
  code: 'soon',
};
export const KIND_OF_SOON: FrequencyTimeToBuy = {
  id: 'fq-time-002',
  value: 14,
  text: frequencyNames.KIND_OF_SOON,
  code: 'kind-of-soon',
};
export const NOT_SOON: FrequencyTimeToBuy = {
  id: 'fq-time-003',
  value: 30,
  text: frequencyNames.NOT_SOON,
  code: 'not-soon',
};

export const FREQ_TIMES_TO_BUY: FrequencyTimeToBuy[] = [
  SOON,
  KIND_OF_SOON,
  NOT_SOON,
];

// Product purchased status
export const STATUS_SOON: StatusProduct = {
  id: 'pr-status-001',
  text: frequencyNames.SOON,
  code: 'soon',
  levelUrgency: 1,
};

export const STATUS_KIND_OF_SOON: StatusProduct = {
  id: 'pr-status-002',
  text: frequencyNames.KIND_OF_SOON,
  code: 'kind-of-soon',
  levelUrgency: 2,
};

export const STATUS_NOT_SOON: StatusProduct = {
  id: 'pr-status-003',
  text: frequencyNames.NOT_SOON,
  code: 'not-soon',
  levelUrgency: 3,
};

export const STATUS_OVERDUE: StatusProduct = {
  id: 'pr-status-004',
  text: 'OVERDUE',
  code: 'overdue',
  levelUrgency: 4,
};

export const STATUS_INACTIVE: StatusProduct = {
  id: 'pr-status-005',
  text: 'INACTIVE',
  code: 'inactive',
  levelUrgency: 5,
};
