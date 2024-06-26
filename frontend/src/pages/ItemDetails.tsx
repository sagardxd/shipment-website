// ItemDetails.tsx
import { useParams, useNavigate } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import ShipmentDetails from '../components/ShipmentDetails';

const ItemDetails = () => {
  const { awbNumber } = useParams<{ awbNumber: string }>();
  const { data: item, loading, error } = useFetchData(`http://localhost:3000/admin/details/${awbNumber}`);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {item && <ShipmentDetails item={item} />}
      <button 
      className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => navigate(`/update/${awbNumber}`)}>Update</button>
    </div>
  );
};

export default ItemDetails;
