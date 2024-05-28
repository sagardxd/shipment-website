import React from 'react';

interface ShipmentDetailsProps {
  item: {
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
    [key: string]: any;
  };
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ item }) => {
  return (
    <div className="max-w-lg  bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold mb-2">Shipment Details</h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-1"><strong>AWB Number:</strong> {item.awbNumber}</p>
          <p className="text-gray-700 mb-1"><strong>Booking Date:</strong> {item.bookingDate}</p>
          <p className="text-gray-700 mb-1"><strong>Consignee Name:</strong> {item.consigneeName}</p>
          <p className="text-gray-700 mb-1"><strong>Destination:</strong> {item.destination}</p>
          <p className="text-gray-700 mb-1"><strong>Destination City:</strong> {item.destinationCity}</p>
          <p className="text-gray-700 mb-1"><strong>Forwarding No:</strong> {item.forwardingNo}</p>
          <p className="text-gray-700 mb-1"><strong>Origin:</strong> {item.origin}</p>
          <p className="text-gray-700 mb-1"><strong>Origin City:</strong> {item.originCity}</p>
          <p className="text-gray-700 mb-1"><strong>Receiver Name:</strong> {item.receiverName}</p>
          <p className="text-gray-700 mb-1"><strong>Status:</strong> {item.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
