import React from 'react';
import logo from './logo.svg';
import './App.css';
import BorrowingForm from './components/borrowForm/BorrowingForm';
import ForgotPassword from './components/forgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <BorrowingForm />
    </div>
  );
}

export default App