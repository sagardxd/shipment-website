import React from 'react';

interface ShipmentFormProps {
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
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isUpdate?: boolean;
}

const ShipmentForm: React.FC<ShipmentFormProps> = ({ item, handleChange, handleSubmit, isUpdate = true }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">AWB Number:</label>
        <input
          type="text"
          name="awbNumber"
          value={item.awbNumber}
          onChange={handleChange}
          readOnly={isUpdate}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Booking Date:</label>
        <input
          type="date"
          name="bookingDate"
          value={item.bookingDate}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Consignee Name:</label>
        <input
          type="text"
          name="consigneeName"
          value={item.consigneeName}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Destination:</label>
        <input
          type="text"
          name="destination"
          value={item.destination}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Destination City:</label>
        <input
          type="text"
          name="destinationCity"
          value={item.destinationCity}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Forwarding No:</label>
        <input
          type="text"
          name="forwardingNo"
          value={item.forwardingNo}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Origin:</label>
        <input
          type="text"
          name="origin"
          value={item.origin}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Origin City:</label>
        <input
          type="text"
          name="originCity"
          value={item.originCity}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Receiver Name:</label>
        <input
          type="text"
          name="receiverName"
          value={item.receiverName}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Status:</label>
        <input
          type="text"
          name="status"
          value={item.status}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isUpdate ? 'Update' : 'Add'} Shipment
      </button>

    </form>
  );
};

export default ShipmentForm;
