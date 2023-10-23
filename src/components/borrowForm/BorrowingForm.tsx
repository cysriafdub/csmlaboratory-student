import React, { useState, ChangeEvent, MouseEvent } from 'react';
import QuantityModal from './QuantityModal';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderLogo from "../../assets/headerlogo.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import QRScannerModal from './QRModal';

interface Borrower {
  id: number;
  studentId: string;
}

interface TableItem {
  id: string | number;
  name: string;
  quantity: number;
}

function BorrowingForm() {
  const tempdatahead: string[] = ["Item No.", "Description", "Qty", "Action"];
  const tempdata: [string, string, number, string][] = [
    ["001", "Beaker", 10, "Delete"],
    ["002", "Test Tube", 9, "Delete"],
    ["003", "Glass", 4, "Delete"],
    ["004", "Bowl", 2, "Delete"],
  ];

  const [data, setData] = useState<string>('No result');

  const [borrowers, setBorrowers] = useState<Borrower[]>([{ id: 1, studentId: "" }]);

  const addBorrower = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newId = borrowers.length + 1;
    const newBorrower: Borrower = { id: newId, studentId: "" };
    setBorrowers([...borrowers, newBorrower]);
  };

  const removeBorrower = (e: MouseEvent<HTMLButtonElement>) => {
    if (borrowers.length > 1) {
      e.preventDefault();
      const updatedBorrowers: Borrower[] = [...borrowers];
      updatedBorrowers.pop();
      setBorrowers(updatedBorrowers);
    }
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<[string, string, number, string][]>([]);
  const [selectedItem, setSelectedItem] = useState<[string, string, number, string] | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [tableData, setTableData] = useState<TableItem[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term: string = e.target.value;
    setSearchTerm(term);
    const results = tempdata.filter(item => item[1].toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
  };

  const handleSelectItem = (item: [string, string, number, string]) => {
    setSelectedItem(item);
    setQuantity(item[2]); // Set the initial quantity to the selected item's quantity
    setIsModalOpen(true);
  };

  const handleAddToTable = (quantity: number) => {
    if (selectedItem) {
      const newItem: TableItem = {
        id: selectedItem[0],
        name: selectedItem[1],
        quantity: quantity,
      };

      const existingIndex = tableData.findIndex(item => item.id === newItem.id);
      if (existingIndex !== -1) {
        const updatedTableData = [...tableData];
        updatedTableData[existingIndex] = newItem; // Update the item in the table
        setTableData(updatedTableData);
      } else {
        setTableData([...tableData, newItem]);
      }

      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIncrement = (index: number, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData[index] = {
        ...updatedTableData[index],
        quantity: updatedTableData[index].quantity + 1
      };
      return updatedTableData;
    });
  };
  
  const handleDecrement = (index: number, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      if (updatedTableData[index].quantity > 0) {
        updatedTableData[index] = {
          ...updatedTableData[index],
          quantity: updatedTableData[index].quantity - 1
        };
      }
      return updatedTableData;
    });
  };

  const handleRemoveItem = (index: number) => {
    setTableData((prevTableData) => {
      const updatedTableData = [...prevTableData];
      updatedTableData.splice(index, 1);
      return updatedTableData;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const qrCodeData = 'Your QR code data here'; // Replace with your QR code data

  const QRopenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQRModalOpen(true);
  };

  const QRcloseModal = () => {
    setIsQRModalOpen(false);
  };

  const [scannedResult, setScannedResult] = useState<string | null>(null);

  const handleScan = (result: string | null) => {
    setScannedResult(result);
  };

  return (
    <div className="pageBody">
      {/* Header */}
      <div className="headerContainer">
        {/* Arrow in the Header */}
        <div className="arrowContainer">
          <button className="arrowButton">
            <ArrowBackIcon sx={{ width: 30, height: 30 }} />
          </button>
        </div>
        <div className="logoContainer">
          <img src={HeaderLogo} alt="logo" />
        </div>
      </div>

      {/* Forms */}
      <div className="allFormContainer">
        <div>
          <h1>Fill-up Form</h1>
        </div>
        <div className="formContainer">
          <form>
            {/* First form container includes student id and course input fields */}
            <div className="firstFormContainer">
              {/* Student ID input, use material UI for the input fields */}
              <div>
                <label>Student ID (Leader)</label>
              </div>
              <div>
                <OutlinedInput
                  id="standard-adornment"
                  className="inputField"
                  placeholder="Student ID"
                  endAdornment={
                    <InputAdornment position="end">
                      <button className="qrButton" onClick={QRopenModal}>
                        <QrCodeScannerIcon />
                      </button>
                    </InputAdornment>
                  }
                />
              </div>
              <div>
                <label>Course</label>
              </div>
              <div>
                <OutlinedInput className="inputField" placeholder="Course" />
              </div>
            </div>
            <div className="secondFormContainer">
              <div>
                <label>Lab Instructor</label>
              </div>
              <div>
                <OutlinedInput
                  id="standard-adornment"
                  className="inputField"
                  placeholder="Lab Instructor"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <div>
                <label>Subject</label>
              </div>
              <div>
                <OutlinedInput
                  className="inputField"
                  placeholder="Subject"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="thirdFormContainer">
                <div>
                  <h1>Equipment Search</h1>
                </div>
                <div>
                  <OutlinedInput
                    className="inputField"
                    placeholder="Search here to add below"
                    value={searchTerm}
                    onChange={handleSearch}
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="tableContainer">
                  <ul>
                    {searchResults.map((item, index) => (
                      <li key={index} onClick={() => handleSelectItem(item)}>
                        {item[1]}
                      </li>
                    ))}
                  </ul>
                  <div className="tableContainer">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Item No.</th>
                          <th>Description</th>
                          <th>Qty</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                              <button onClick={(e) => handleDecrement(index, e)}>-</button>
                              <input
                                className='quantityInput'
                                value={item.quantity}
                                onChange={(e) => {
                                  const newValue = parseInt(e.target.value, 10);
                                  if (!isNaN(newValue)) {
                                    // Set the new quantity directly
                                    setTableData((prevTableData) => {
                                      const updatedTableData = [...prevTableData];
                                      updatedTableData[index] = {
                                        ...updatedTableData[index],
                                        quantity: newValue
                                      };
                                      return updatedTableData;
                                    });
                                  }
                                }}
                              />
                              <button onClick={(e) => handleIncrement(index, e)}>+</button>
                            </td>
                            <td>
                              <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="fourthFormContainer">
                <div>
                  <h1>Members</h1>
                </div>
                {borrowers.map((borrower, index) => (
                  <div key={index}>
                    <div className="labelButtonContainer">
                      <label>{`Borrower ${borrower.id}`}</label>
                      <button className="removeButton" onClick={removeBorrower}>
                        <RemoveCircleIcon className="removeButtonIcon" />
                      </button>
                    </div>
                    <OutlinedInput
                      id="standard-adornment"
                      className="inputField"
                      value={borrower.studentId}
                      placeholder="Student ID"
                      onChange={(e) => {
                        const { value } = e.target;
                        setBorrowers((prevBorrowers) =>
                          prevBorrowers.map((prevBorrower) =>
                            prevBorrower.id === borrower.id
                              ? { ...prevBorrower, studentId: value }
                              : prevBorrower
                          )
                        );
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <button className="qrButton">
                            <QrCodeScannerIcon />
                          </button>
                        </InputAdornment>
                      }
                    />
                  </div>
                ))}
                <div className="addButtonContainer">
                  <button className="addBButton" onClick={addBorrower}>
                    <AddIcon className="addBButton" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ width: '100%' }}></div>
      {isModalOpen && (
        <QuantityModal
          selectedItem={selectedItem}
          onClose={closeModal}
          onAddToTable={handleAddToTable}
        />
      )}

      {isQRModalOpen && (
      <QRScannerModal isOpen={isQRModalOpen} onRequestClose={QRcloseModal} onScan={handleScan} />
    )}
    </div>
  );
}

export default BorrowingForm;
