import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

const ItemDetails = () => {
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



  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>AWB Number: {item.awbNumber}</p>
      <p>Booking Date: {new Date(item.bookingDate).toLocaleDateString()}</p>
      <p>Consignee Name: {item.consigneeName}</p>
      <p>Destination: {item.destination}</p>
      <p>Destination City: {item.destinationCity}</p>
      <p>Forwarding No: {item.forwardingNo}</p>
      <p>Origin: {item.origin}</p>
      <p>Origin City: {item.originCity}</p>
      <p>Receiver Name: {item.receiverName}</p>
      <p>Status: {item.status}</p>
      <button onClick={(e)=> {navigate(`/update/${item.awbNumber}`)}}>Update</button>
    </div>
  );
};

export default ItemDetails;
