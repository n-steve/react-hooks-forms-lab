import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [dataArr, setDataArr] = useState(items);
  const [inputField, setInputField] = useState("");

  function onItemFormSubmit(newItem) {
    setDataArr([...dataArr, newItem]);
  }

  function handleSearch(event) {
    setInputField(event.target.value);

    const searchFilteredItems = items.filter((item) => {
      const splitItemName = item.name.split(" ");

      if (splitItemName.length > 1) {
        for (const splitItem of splitItemName) {
          if (event.target.value === splitItem) return item.name;
        }
      }

      if (event.target.value === item.name)
        return event.target.value === item.name;
      else if (event.target.value === "") return true;
    });
    setDataArr(searchFilteredItems);
  }

  function handleCategoryChange(event) {
    const filteredItems = items.filter((item) => {
      if (event.target.value === "All") return true;
      return event.target.value === item.category;
    });

    setDataArr(filteredItems);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={inputField}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {dataArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

//setDataArr(...dataArr,new thing adding to the array (event.target.value))
//look up append to Array in useState
