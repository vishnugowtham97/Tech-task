import React, { useState } from "react";
import "./Tasks.css";

const Task3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState([
    // mock array of object data
    {
      id: 1,
      name: "Mark",
      email: "mark@example.com",
      phone: "1234567890",
      complete: false,
    },
    {
      id: 2,
      name: "Antony",
      email: "antony@example.com",
      phone: "9876543210",
      complete: false,
    },
    {
      id: 3,
      name: "Babu",
      email: "babu@example.com",
      phone: "5555555555",
      complete: true,
    },
  ]);
  const [ids, setId] = useState(0); //Iitial id set to 0
  const [isEditing, setIsEditing] = useState(false); //initially isediting is set to false
  const [editId, setEditId] = useState(null); //initially edit id set to false

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedList = add.map((item) =>
        item.id === editId ? { ...item, name, email, phone } : item
      );
      setAdd(updatedList);
      setIsEditing(false);
      setEditId(null);
    } else {
      setId((prevId) => prevId + 1);
      setAdd([...add, { id: ids, name, email, phone, complete: false }]);
    }
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditId(item.id);
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
  };

  const handleDelete = (id) => {
    setAdd(add.filter((val) => val.id !== id));
  };

  const handleComplete = (id) => {
    const updatedList = add.map((val) =>
      val.id === id ? { ...val, complete: !val.complete } : val
    );
    setAdd(updatedList);
  };

  return (
    <div className="task3">
      <div className="crud-operation">
        <h3 className="heading">CRUD Operation with local variable</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            required
            placeholder="enter the phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="add-btn">+</button>
        </form>
      </div>

      <div className="table_contain">
        <table className="table_crud">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {add.map((val) => (
              <tr
                key={val.id}
                className={`tr-row ${val.complete ? "complete" : ""}`}
              >
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                  <button className="btn" onClick={() => handleEdit(val)}>
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(val.id)}>
                    Delete
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleComplete(val.id)}
                  >
                    {val.complete ? "Incomplete" : "Complete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task3;
