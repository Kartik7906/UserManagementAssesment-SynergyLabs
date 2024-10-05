import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    username: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (user = null) => {
    if (user) {
      setFormData(user);
      setIsEditing(true);
    } else {
      setFormData({ id: null, name: "", username: "", email: "" });
      setIsEditing(false);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${formData.id}`,
        formData
      );
      setUsers(
        users.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );
      setUsers([...users, response.data]);
    }
    closeModal();
  };

  const handleDelete = async (userId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleDetails = (userId) => {
    window.location.href = `/details/${userId}`;
  };

  return (
    <Router>
      <div className="App">
        {/* here is search component */}

        <div class="dashboard-container">
          <h1 class="dashboard-title">Users Dashboard</h1>
          <div class="dashboard-controls">
            <input type="text" placeholder="🔍 Search" class="search-input" />
            <button className="btn add-user-btn" onClick={() => openModal()}>
              Create User
            </button>
          </div>
        </div>

        {/* upto be carefull while designing */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn edit" onClick={() => openModal(user)}>
                    Edit
                  </button>
                  <button
                    className="btn delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn details"
                    onClick={() => handleDetails(user.id)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <h2>{isEditing ? "Edit User" : "Add User"}</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <div className="modal-buttons">
                  <button className="btn submit" type="submit">
                    {isEditing ? "Update" : "Create"}
                  </button>
                  <button
                    className="btn cancel"
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/details/:userId" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
