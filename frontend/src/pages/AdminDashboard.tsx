// AdminDashboard.tsx
import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import ShipmentDetails from '../components/ShipmentDetails';

const AdminDashboard = () => {
  const { data, loading, error } = useFetchData('http://localhost:3000/admin/all-data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map((item: any) => (
        <Link key={item._id} to={`/details/${item.awbNumber}`}>
          <ShipmentDetails item={item} />
        </Link>
      ))}
    </div>
  );
};

export default AdminDashboard;
