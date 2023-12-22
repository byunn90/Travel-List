import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  function emptyBox() {
    clearList();
    console.log(items);
  }
  console.log(items);

  if (sortBy === "input") sortedItems = items;
  //
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((items) => (
          <Item
            item={items}
            onToggleItems={onToggleItems}
            onDeleteItem={onDeleteItem}
            key={items.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={emptyBox}>Clear List</button>
      </div>
    </div>
  );
}
