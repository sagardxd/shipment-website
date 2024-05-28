// UpdateShipment.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetchData from '../hooks/useFetchData';
import ShipmentForm from '../components/ShipmentForm';

const UpdateShipment = () => {
  const { awbNumber } = useParams<{ awbNumber: string }>();
  const { data, loading, error } = useFetchData(`http://localhost:3000/admin/details/${awbNumber}`);
  const [item, setItem] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setItem(data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem: any) => (prevItem ? { ...prevItem, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      try {
        await axios.put(`http://localhost:3000/admin/update-shipment/${awbNumber}`, item);
        navigate(`/details/${awbNumber}`);
      } catch (err) {
        console.error("Error updating item:", err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    item && <ShipmentForm item={item} handleChange={handleChange} handleSubmit={handleSubmit} isUpdate={true} />
  );
};

export default UpdateShipment;
