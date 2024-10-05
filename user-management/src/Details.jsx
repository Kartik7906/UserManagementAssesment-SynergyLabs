// Details.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <form>
        <label>
          Username:
          <input type="text" value={user.username} readOnly />
        </label>
        <label>
          Email:
          <input type="email" value={user.email} readOnly />
        </label>
        <label>
          Phone:
          <input type="text" value={user.phone} readOnly />
        </label>
        <label>
          Address:
          <input type="text" value={`${user.address.street}, ${user.address.city}`} readOnly />
        </label>
        <label>
          Company:
          <input type="text" value={user.company.name} readOnly />
        </label>
        <label>
          Website:
          <input type="text" value={user.website} readOnly />
        </label>
      </form>
    </div>
  );
};

export default Details;
