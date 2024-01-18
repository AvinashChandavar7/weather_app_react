/* eslint-disable react/prop-types */
import { useState } from 'react';
import { staticSuggestions } from '../constants/citySuggestions';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    fetchSuggestions(value).then(setSuggestions);
  };

  const fetchSuggestions = async (value) => {
    return staticSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = () => {
    onSearch(inputValue);
    setSuggestions([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full flex flex-row items-center px-4 border-2 rounded-lg shadow-lg text-black">

      <img src="/assets/pin.png" alt="location" width={20} height={20} loading="lazy" />

      <div className="relative w-full">

        <input
          type="search"
          placeholder="Search"
          className="w-full font-bold outline-none border-none p-4"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        {suggestions.length > 0 && (
          <ul
            className="suggestions-list absolute z-10 top-16 -left-9 border shadow-md  w-[375px] rounded-md bg-white transition"
          >
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <li
                key={index}
                className="p-4 border-b-2 font-semibold hover:bg-gray-100 cursor-pointer overflow-hidden"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <img src="/assets/search.png"
        alt="search" width={20} height={20}
        className="cursor-pointer" loading="lazy"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default SearchBar;
