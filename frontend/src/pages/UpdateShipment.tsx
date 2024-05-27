import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface DataItem {
  _id: string;
  awbNumber: string;
  bookingDate: string;
  consigneeName: string;
  destination: string;
  destinationCity: string;
  forwardingNo: string;
  origin: string;
  originCity: string;
  receiverName: string;
  status: string;
}

const UpdateShipment = () => {
  const { awbNumber } = useParams<{ awbNumber: string }>();
  const [item, setItem] = useState<DataItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/admin/details/${awbNumber}`);
        setItem(res.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [awbNumber]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => (prevItem ? { ...prevItem, [name]: value } : null));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      try {
        await axios.put(`http://localhost:3000/admin/update-shipment/${item.awbNumber}`, item);
        navigate(`/details/${awbNumber}`);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>AWB Number: </label>
        <input type="text" name="awbNumber" value={item.awbNumber} onChange={handleChange} readOnly />
      </div>
      <div>
        <label>Booking Date: </label>
        <input type="date" name="bookingDate" value={new Date(item.bookingDate).toISOString().split('T')[0]} onChange={handleChange} />
      </div>
      <div>
        <label>Consignee Name: </label>
        <input type="text" name="consigneeName" value={item.consigneeName} onChange={handleChange} />
      </div>
      <div>
        <label>Destination: </label>
        <input type="text" name="destination" value={item.destination} onChange={handleChange} />
      </div>
      <div>
        <label>Destination City: </label>
        <input type="text" name="destinationCity" value={item.destinationCity} onChange={handleChange} />
      </div>
      <div>
        <label>Forwarding No: </label>
        <input type="text" name="forwardingNo" value={item.forwardingNo} onChange={handleChange} />
      </div>
      <div>
        <label>Origin: </label>
        <input type="text" name="origin" value={item.origin} onChange={handleChange} />
      </div>
      <div>
        <label>Origin City: </label>
        <input type="text" name="originCity" value={item.originCity} onChange={handleChange} />
      </div>
      <div>
        <label>Receiver Name: </label>
        <input type="text" name="receiverName" value={item.receiverName} onChange={handleChange} />
      </div>
      <div>
        <label>Status: </label>
        <input type="text" name="status" value={item.status} onChange={handleChange} />
      </div>
      <button type="submit">Update Shipment</button>
    </form>
  );
};

export default UpdateShipment;
