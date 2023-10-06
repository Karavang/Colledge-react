import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter a value.");
    } else if (name && isEditing) {
      const updatedList = list.map((item) =>
        item.id === editID ? { ...item, title: name } : item
      );
      setList(updatedList);
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item edited.");
    } else {
      showAlert(true, "success", "Task added to the list.");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
    if (show) {
      setTimeout(() => {
        setAlert({ show: false, type: "", msg: "" });
      }, 1000);
    }
  };

  const clearList = () => {
    showAlert(true, "danger", "Empty list.");
    setList([]);
  };

  const removeItem = (id) => {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
    showAlert(true, "danger", "Item removed.");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>TODO list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. Pass the exam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
