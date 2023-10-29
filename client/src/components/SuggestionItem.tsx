type OptionItem = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};
type SuggestionItemProps = {
  handleOnSelect: (option: OptionItem) => void;
  option: OptionItem;
};

export const SuggestionItem = ({
  handleOnSelect,
  option,
}: SuggestionItemProps) => {
  return (
    <li>
      <button
        className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
        onClick={() => handleOnSelect(option)}
      >
        {option.name}, {option.country}
      </button>
    </li>
  );
};
