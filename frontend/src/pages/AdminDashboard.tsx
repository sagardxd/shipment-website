import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface DataItem {
  _id: string;
  awbNumber: string;
  bookingDate: string;
  receiverName: string;
  status: string;
}

const AdminDashboard = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/all-data");
        setData(res.data);
        res.data.forEach((item: DataItem) => {
          console.log(item);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
          <Link to={`/details/${item.awbNumber}`}>
          <p>AWB Number: {item.awbNumber}</p>
          <p>Booking Date: {new Date(item.bookingDate).toLocaleDateString()}</p>
          <p>Status: {item.status}</p>
          <p>Receiver Name: {item.receiverName}</p>
        </Link>
      ))}
    </div>
  );
};

export default AdminDashboard;
