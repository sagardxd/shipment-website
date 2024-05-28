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
    <div className="w-full rounded overflow-hidden p-6 bg-white ">
      <h2 className="text-xl font-bold mb-4">Shipment Details</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <p className="text-gray-700"><span className="font-semibold">AWB Number:</span> {item.awbNumber}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700"><span className="font-semibold">Booking Date:</span> {new Date(item.bookingDate).toLocaleDateString()}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700"><span className="font-semibold">Receiver Name:</span> {item.receiverName}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700"><span className="font-semibold">Status:</span> {item.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
