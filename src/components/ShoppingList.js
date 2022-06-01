import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [searchedItem, setSearchedItem] = useState("");
  const [dataArr, setDataArr] = useState(items);

  function handleSearch(event) {
    setSearchedItem(event.target.value);
    console.log("hi", event.target.value);

    setDataArr(
      dataArr.filter((item) => {
        console.log({ searchedItem, item, dataArr }, event.target.value);
        return event.target.value === item.name;
      })
    );
  }

  function handleCategoryChange(event) {
    setDataArr(
      items.filter((item) => {
        if (event.target.value === "All") return true;
        return event.target.value === item.category;
      })
    );
  }

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
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
