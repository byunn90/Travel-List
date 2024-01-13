import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  // here we set a useState for initialItems object of arrays
  const [items, setItems] = useState([initialItems]);
  // Here we have a created a function that stores the new items
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  // Function that delete all the items in setItems state then wipes it clear after confirmming it
  function clearItems() {
    const confirmed = window.confirm("Are you sure you want delete all items?");
    if (confirmed) setItems([]);
  }

  function handleDeleteItem(id) {
    // if items.id is not ! equal to id Then do nothing or else if same remove it
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        clearList={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
