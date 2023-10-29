import { optionType } from './../types/index';
import { SuggestionItem } from './SuggestionItem';

type SuggestionProps = {
  options: [];
  onSelect: (option: optionType) => void;
};

const Suggestions = ({ options, onSelect }: SuggestionProps): JSX.Element => (
  <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
    {options.map((option: optionType, index: number) => (
      <SuggestionItem
        option={option}
        handleOnSelect={onSelect}
        key={option.name + '-' + index}
      />
    ))}
  </ul>
);

export default Suggestions;
