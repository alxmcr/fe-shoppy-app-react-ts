import { FrequencyTimeToBuy } from '../../../../@types/appTypes';
import './RadioButtonFreqTime.scss';

type RadioButtonFreqTimeProps = {
  groupId: string;
  frequencyTime: FrequencyTimeToBuy;
  onSelectFreqTime: (freqTimeSelected: FrequencyTimeToBuy) => void;
  isChecked: boolean;
};

export default function RadioButtonFreqTime({
  frequencyTime,
  groupId = 'group_radio_buttons',
  isChecked = false,
  onSelectFreqTime,
}: RadioButtonFreqTimeProps) {
  const onChangeFreqTime = () => {
    onSelectFreqTime(frequencyTime);
  };

  return (
    <label
      htmlFor={frequencyTime.id}
      className="frequency-time"
      data-cy={`label-radiobutton-${frequencyTime.code}`}
    >
      <input
        className="frequency-time__radio_button"
        type="radio"
        id={frequencyTime.id}
        name={groupId}
        value={frequencyTime.value}
        onChange={onChangeFreqTime}
        checked={isChecked}
        data-cy={`label-input-radiobutton-${frequencyTime.code}`}
      />
      <span className="frequency-time__circle"></span>
      <span
        className="frequency-time__text"
        data-cy={`label-text-${frequencyTime.code}`}
      >
        {frequencyTime.text}
      </span>
    </label>
  );
}
