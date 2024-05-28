import React from 'react';

interface ShipmentDetailsProps {
  item: {
    awbNumber: string;
    bookingDate: string;
    receiverName: string;
    status: string;
    [key: string]: any;
  };
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ item }) => {
  return (
    <div>
      <p>AWB Number: {item.awbNumber}</p>
      <p>Booking Date: {new Date(item.bookingDate).toLocaleDateString()}</p>
      <p>Receiver Name: {item.receiverName}</p>
      <p>Status: {item.status}</p>
    </div>
  );
};

export default ShipmentDetails;
