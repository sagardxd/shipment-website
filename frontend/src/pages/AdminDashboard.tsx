// AdminDashboard.tsx
import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import ShipmentDetails from '../components/DashboardShipmentCard';

const AdminDashboard = () => {
  const { data, loading, error } = useFetchData('http://localhost:3000/admin/all-data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='flex flex-col gap-5'>
      {data.map((item: any) => (
        <Link key={item._id} to={`/details/${item.awbNumber}`}>
          <ShipmentDetails item={item} />
        </Link>
      ))}
    </div>
  );
};

export default AdminDashboard;
