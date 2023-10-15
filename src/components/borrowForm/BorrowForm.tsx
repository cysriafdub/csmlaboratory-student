import React, { useState } from 'react';
import arrowImage from '../../assets/imgs/Arrow.png'; // Import your images
import smallLogoImage from '../../assets/imgs/SmallLogo.png';

export default function BorrowForm() {
    const header = ['Item No.', 'Description', 'Qty.', 'Action'];
    const data = [
        ['001', 'Coat', '10', 'Delete'],
        ['002', 'Scissors', '2', 'Delete'],
        ['003', 'Glass', '4', 'Delete'],
        ['004', 'Bowl', '2', 'Delete'],
    ];

    const [borrowers, setBorrowers] = useState([{ id: 1, studentId: '' }]);

    const addBorrower = () => {
        const newId = borrowers.length + 1;
        const newBorrower = { id: newId, studentId: '' };
        setBorrowers([...borrowers, newBorrower]);
    };
    const removeBorrower = () => {
        if (borrowers.length > 1) {
            const updatedBorrowers = [...borrowers];
            updatedBorrowers.pop(); // Remove the last borrower from the array
            setBorrowers(updatedBorrowers);
        }
    };

    return (
        <div className='pageBody'>
            <div className='borrowFormPageContainer'>
                <div className='borrowFormHeader'>
                    <div className='arrowContainer'>
                        <button>
                            <img  alt="Arrow" />
                        </button>
                    </div>
                    <div className='smallLogoContainer'>
                        <img className='smallLogo' alt="SmallLogo" />
                    </div>
                </div>

                {/* This is for the body */}
                <div className='formFirstContainer'>
                    <div>
                        <h1 className='formTitle'>Fill-Up Form</h1>
                    </div>
                    <div>
                        <div className='firstFormContainer'>
                            <div className='formContainernc'>
                                <div>
                                    <label className='firstFormLabel'>Student ID (Leader)</label>
                                </div>
                                <div>
                                    <input className='firstFormInput' placeholder="Student ID" />
                                </div>
                                <div>
                                    <label className='firstFormLabel'>Course</label>
                                </div>
                                <div>
                                    <input className='firstFormInput' placeholder="Course" />
                                </div>
                            </div>
                        </div>
                        <div className='additionalContainer'>
                            <div>
                                <label className='firstFormLabel'>Lab Instructor</label>
                            </div>
                            <div>
                                <input className='firstFormInput' placeholder="Lab Instructor" />
                            </div>
                            <div>
                                <label className='firstFormLabel'>Subject</label>
                            </div>
                            <div>
                                <input className='firstFormInput' placeholder="Subject" />
                            </div>

                            {/* This is for the equipment search and table */}
                            <div>
                                <h1 className='formTitle'>Equipment Search</h1>
                            </div>
                            <div className='equipmentSearchContainer'>
                                <input className='firstFormInput' placeholder="Search Equipment to Add" />
                            </div>
                            <div className='tableContainer'>
                                <table className='tableStyle'>
                                    <thead>
                                        <tr className='tableRow'>
                                            {header.map((headerItem, index) => (
                                                <th key={index}>{headerItem}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((rowData, index) => (
                                            <tr key={index}>
                                                {rowData.map((cell, cellIndex) => (
                                                    <td key={cellIndex}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* This is for the members */}
                            <div>
                                <h1 className='formTitle'>Members</h1>
                            </div>
                            {borrowers.map((borrower) => (
                                <div key={borrower.id}>
                                    <label className='firstFormLabel'>{`Borrower ${borrower.id}`}</label>
                                    <input
                                        className='firstFormInput'
                                        placeholder="Student ID"
                                        value={borrower.studentId}
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
                                    />
                                </div>
                            ))}
                            <button className='addButton' onClick={addBorrower}>
                                Add
                            </button>
                            <button className='removeButton' onClick={removeBorrower}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
