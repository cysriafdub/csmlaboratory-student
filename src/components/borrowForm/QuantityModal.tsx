import React, { useState, useEffect } from 'react';

interface QuantityModalProps {
  selectedItem: any; // Replace 'any' with the actual type of selectedItem
  onClose: () => void;
  onAddToTable: (quantity: number) => void;
}

const QuantityModal: React.FC<QuantityModalProps> = ({ selectedItem, onClose, onAddToTable }) => {
  const [quantity, setQuantity] = useState<number>(selectedItem[2]); // Initialize with the current quantity

  // Update the quantity whenever the selected item changes
  useEffect(() => {
    setQuantity(selectedItem[2]);
  }, [selectedItem]);

  const handleAddClick = () => {
    onAddToTable(quantity);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Selected Item: {selectedItem[1]}</p>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default QuantityModal;
