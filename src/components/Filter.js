import React, { useState } from "react";
import Manufacture from "./Manufacture";

const Filter = (props) => {
  const [searchText, setSearchText] = useState("");
  const [manufacture, setManufacture] = useState("");

  // Zmiana wyszukiwanego tekstu
  const onValueChange = (value) => {
    setSearchText(value);
    props.onChange(value);
  };

  // Zmiana kategorii
  const onSelectionChange = (value) => {
    setManufacture(value);
    props.onSelectionChange(value);
  };

  const onClear = (event) => {
    event.preventDefault(); //zapobieganie odświezeniu przeglądarki
    props.onClear();
    setSearchText("");
    setManufacture("");
  };

  const manufactures = () => {
    let all = props.products.map((element) => element.manufacture);
    let uniq = new Set(all);
    return Array.from(uniq).map((m) => {
      return (
        <Manufacture
          manufacture={m}
          key={m}
          isChecked={manufacture === m}
          onSelectionChange={onSelectionChange}
        />
      );
    });
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <h4>Search</h4>
        <button onClick={onClear} className="clear">
          Clear
        </button>
      </div>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="search..."
          onChange={(element) => onValueChange(element.target.value)}
          //tekst wpisany podczas wyszukiwania
        />
      </div>
      <h4>Manufacturer</h4>
      <div>{manufactures()}</div>
    </div>
  );
};

export default Filter;
