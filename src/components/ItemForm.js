import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [userInput, setUserInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Produce");

  return (
    <form
      className="NewItem"
      onSubmit={() =>
        onItemFormSubmit({
          id: uuid(),
          name: userInput,
          category: selectedCategory,
        })
      }
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setUserInput(e.target.value)}
          label="Name"
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
