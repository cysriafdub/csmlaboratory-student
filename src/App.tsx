import React from 'react';
import logo from './logo.svg';
import './App.css';
import BorrowingForm from './components/borrowForm/BorrowingForm';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import RequestConfirm from './components/requestConfirm/RequestConfirm';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BorrowingForm />
    </div>
  );
}

export default App