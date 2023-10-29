import React from 'react';
import Modal from 'react-modal';
import { QrScanner } from '@yudiel/react-qr-scanner';

Modal.setAppElement('#root'); // Set the root element for accessibility

interface QRScannerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onScan: (result: string | null) => void;
}

const QRScannerModal: React.FC<QRScannerModalProps> = ({ isOpen, onRequestClose, onScan }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="QR Scanner Modal"
    >
      <div className="qr-scanner-modal-content qrStyle">
        <QrScanner
          onDecode={(result) => {
            console.log(result);
            onScan(result); // Pass the result to the parent component
          }}
          onError={(error) => {
            console.log(error?.message);
            // Handle error if needed
          }}
        />
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default QRScannerModal;
