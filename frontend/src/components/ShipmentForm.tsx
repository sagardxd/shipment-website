// ShipmentForm.tsx
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>AWB Number: </label>
        <input
          type="text"
          name="awbNumber"
          value={item.awbNumber}
          onChange={handleChange}
          readOnly={isUpdate}
        />
      </div>
      <div>
        <label>Booking Date: </label>
        <input
          type="date"
          name="bookingDate"
          value={item.bookingDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Consignee Name: </label>
        <input
          type="text"
          name="consigneeName"
          value={item.consigneeName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Destination: </label>
        <input
          type="text"
          name="destination"
          value={item.destination}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Destination City: </label>
        <input
          type="text"
          name="destinationCity"
          value={item.destinationCity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Forwarding No: </label>
        <input
          type="text"
          name="forwardingNo"
          value={item.forwardingNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Origin: </label>
        <input
          type="text"
          name="origin"
          value={item.origin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Origin City: </label>
        <input
          type="text"
          name="originCity"
          value={item.originCity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Receiver Name: </label>
        <input
          type="text"
          name="receiverName"
          value={item.receiverName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status: </label>
        <input
          type="text"
          name="status"
          value={item.status}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{isUpdate ? 'Update' : 'Add'} Shipment</button>
    </form>
  );
};

export default ShipmentForm;
