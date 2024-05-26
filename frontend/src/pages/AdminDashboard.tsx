import axios from 'axios';
import { useEffect, useState } from 'react';

const AdminDashboard = () => {

    const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/all-data");
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default AdminDashboard;
