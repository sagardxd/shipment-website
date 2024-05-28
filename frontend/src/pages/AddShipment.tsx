// AddShipment.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShipmentForm from '../components/ShipmentForm';

const AddShipment = () => {
  const [item, setItem] = useState({
    awbNumber: '',
    bookingDate: '',
    consigneeName: '',
    destination: '',
    destinationCity: '',
    forwardingNo: '',
    origin: '',
    originCity: '',
    receiverName: '',
    status: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/admin/add-data', item, {
        withCredentials: true,
      });
      navigate('/admin-dashboard');
    } catch (err) {
      console.error("Error adding shipment:", err);
    }
  };

  return (
    <ShipmentForm item={item} handleChange={handleChange} handleSubmit={handleSubmit} isUpdate={false} />
  );
};

export default AddShipment;
