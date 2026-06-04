import { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar({ value, onChange, delay = 500 }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, delay);

    return () => clearTimeout(handler);
  }, [inputValue, delay, onChange]);

  const handleClear = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar jogos..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {inputValue && (
          <button className="clear-btn" onClick={handleClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;