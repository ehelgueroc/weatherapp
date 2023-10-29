import { ChangeEvent } from 'react';

import Header from './Header';
import Suggestions from './Suggestions';

import { optionType } from '../types/index';

type SearchBarProps = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
  placeholder?: string;
  onClear: () => void;
};

const SearchBar = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
  placeholder = '',
  onClear,
}: SearchBarProps) => (
  <section className="w-full md:max-w-[1024px] p-10 flex flex-col text-center items-center justify-center">
    <Header />

    <div className="relative flex mt-10 md:mt-4">
      <input
        type="text"
        value={term}
        className="px-6 py-1 rounded-l-md border-2 border-white"
        onChange={onInputChange}
        placeholder={placeholder}
      />

      <Suggestions options={options} onSelect={onOptionSelect} />

      <button
        className=" border-2 border-zinc-100  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
      <button
        className=" rounded-r-md border-2 border-zinc-100  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onClear}
      >
        clear
      </button>
    </div>
  </section>
);

export default SearchBar;
