import { FrequencyTimeToBuy } from '../../../../@types/appTypes';
import RadioButtonFreqTime from '../RadioButtonFreqTime';
import './GroupRadioButtonsFreqTime.scss';

type Props = {
  groupId: string;
  frequencyTimes: FrequencyTimeToBuy[];
  freqTime: FrequencyTimeToBuy | null;
  onSelectFreqTime: (freqTimeSelected: FrequencyTimeToBuy) => void;
};

export default function GroupRadioButtonsFreqTime({
  groupId = 'group_radio_buttons',
  freqTime,
  frequencyTimes = [],
  onSelectFreqTime,
}: Props) {
  if (frequencyTimes.length === 0) return null;

  return (
    <div className="group-radio-buttons-freq-time">
      {frequencyTimes.map((frequencyTime) => (
        <RadioButtonFreqTime
          key={frequencyTime?.id}
          groupId={groupId}
          frequencyTime={frequencyTime}
          onSelectFreqTime={onSelectFreqTime}
          isChecked={freqTime?.id === frequencyTime?.id}
        />
      ))}
    </div>
  );
}
