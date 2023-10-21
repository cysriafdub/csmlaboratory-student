import { QrReader, QrReaderProps } from 'react-qr-reader';
import { useState, Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderLogo from "../../assets/headerlogo.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

type ExtendedQrReaderProps = QrReaderProps & {
  style: React.CSSProperties;
};

function BorrowingForm() {
  const tempdatahead = ["Item No.", "Description", "Qty", "Action"];
  const tempdata = [
    ["001", "Beaker", "10", "Delete"],
    ["002", "Test Tube", "9", "Delete"],
    ["003", "Glass", "4", "Delete"],
    ["004", "Bowl", "2", "Delete"],
  ];

  const [data, setData] = useState('No result');

  const [borrowers, setBorrowers] = useState([{ id: 1, studentId: "" }]);

  const addBorrower = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newId = borrowers.length + 1;
    const newBorrower = { id: newId, studentId: "" };
    setBorrowers([...borrowers, newBorrower]);
  };

  const removeBorrower = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (borrowers.length > 1) {
      e.preventDefault();
      const updatedBorrowers = [...borrowers];
      updatedBorrowers.pop(); // Remove the last borrower from the array
      setBorrowers(updatedBorrowers);
    }
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
                  // End adornment is for input field icon position
                  endAdornment={
                    <InputAdornment position="end">
                      <button className="qrButton">
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
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="tableContainer">
                  {/* Add Table Data Here */}
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
                      <button className="removeButton" onClick={removeBorrower}><RemoveCircleIcon className="removeButtonIcon" /></button>
                    </div>
                    <OutlinedInput
                      id="standard-adornment"
                      className="inputField"
                      value={borrower.studentId}
                      placeholder="Student ID"
                      onChange={(e) => {
                        const { value } = e.target;
                        // Update the studentId for the corresponding borrower
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
      <div style={{ width: '100%' }}>

      </div>
    </div>
  );
}

export default BorrowingForm;
