import { useState } from "react";
import "./styles.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddItem() {
    if (inputValue !== "") {
      setItems(() => [...items, inputValue]);
      setInputValue("");
    }
  }

  function handleDeleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>React List App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteItem(index)}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
