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
        <h1 className='addText'>Add Item</h1>
        <p className='itemName'>{selectedItem[1]}</p>
        <input
          className='qtyInputField'
          type="number"
          placeholder="Example: 4"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <div className='btnsContainer'>
          <div>
            <button onClick={handleAddClick} className='addQtyBtn'>Add</button>
          </div>
          <div>
            <button onClick={onClose} className='cancelQtyBtn'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;
