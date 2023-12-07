import React, { useState, useEffect } from 'react';
import FruitList from '../components/FruitList';
import { getFruits } from '../services/api';

const Dashboard = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    // Simula el consumo de datos de la API
    getFruits().then((data) => setFruits(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <FruitList fruits={fruits} />
    </div>
  );
};

export default Dashboard;
