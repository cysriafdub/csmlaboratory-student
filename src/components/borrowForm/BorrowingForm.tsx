import React, { useState, ChangeEvent, MouseEvent, useRef, useEffect } from 'react';
import QuantityModal from './QuantityModal';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderLogo from "../../assets/headerlogo.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Link } from 'react-router-dom';


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
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (document.activeElement && !document.activeElement.classList.contains('suggestionItem')) {
        // Hide the suggestion box when the input field loses focus
        setShowSuggestionBox(false);
      }
    }, 100);
  };
  
  

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term: string = e.target.value;
    setSearchTerm(term);
  
    // Check if the search term is not empty and show the suggestion box
    if (term.trim() !== '') {
      setShowSuggestionBox(true);
      const results = tempdata.filter(item => item[1].toLowerCase().includes(term.toLowerCase()));
      setSearchResults(results);
    } else {
      // If the search term is empty, hide the suggestion box
      setShowSuggestionBox(false);

      setSearchResults([]); // You may want to clear the search results in this case
    }
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

  return (
    <div className="pageBody">
      {/* Header */}
      <div className="headerContainer">
        {/* Arrow in the Header */}
        <div className="arrowContainer">
          <Link to="/dashboard" className="customArrowLink">
            <ArrowBackIcon sx={{ width: 30, height: 30 }} />
          </Link>
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
                  className="firstfield"
                  placeholder="Student ID"
                  endAdornment={
                    <InputAdornment position="end">
                      <button className="qrButton">
                      </button>
                    </InputAdornment>
                  }
                />
              </div>
              <div>
                <label>Course</label>
              </div>
              <div>
                <OutlinedInput className="firstfield" placeholder="Course" />
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
                    onFocus={handleInputFocus} // Call this when the input is focused
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="tableContainer">
                  
                    {/* Conditionally render the suggestion box based on isInputFocused */}
                    {isInputFocused && (
                      <div className='suggestionBox' style={{ display: showSuggestionBox ? 'block' : 'none' }}>
                        <ul className='ulStyle'>
                          {searchResults.map((item, index) => (
                            <div className='liContainer'>
                              <li className='liStyle' key={index} onClick={() => handleSelectItem(item)}>
                                {item[1]}
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    )}
                  
                  <div className="tableContainer1">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Item No.</th>
                          <th>Description</th>
                          <th>Qty</th>
                          <th>Action</th>
                        </tr>
                        
                      </thead>
                      <div className='yawa'></div>
                      <tbody className='bodytable'>
                        {tableData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className='editQty'>
                              <button className='btndecrement' onClick={(e) => handleDecrement(index, e)}>-</button>
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
                              <button className='btnincrement' onClick={(e) => handleIncrement(index, e)}>+</button>
                            </td>
                            <td>
                              <button className='removeBtnLink' onClick={() => handleRemoveItem(index)}>Remove</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className='totalItem'><b>Total Selected:</b></p>
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
          <div className='btnsContainer1'>
            <div>
              <Link to="/request-confirm">
                <button className='reqBtn'>Request</button>
              </Link>
            </div>
            <div>
              <Link to="/dashboard">
                <button className='cancelBtn'>Cancel</button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div style={{ height: '100%' }}></div>
      {isModalOpen && (
        <QuantityModal
          selectedItem={selectedItem}
          onClose={closeModal}
          onAddToTable={handleAddToTable}
        />
      )}
    </div>
  );
}

export default BorrowingForm;