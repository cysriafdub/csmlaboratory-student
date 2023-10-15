import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import BorrowForm from './components/borrowForm/BorrowForm';

function App() {
  return (
    <div className="App">
      <BorrowForm />
    </div>
  );
}

export default App