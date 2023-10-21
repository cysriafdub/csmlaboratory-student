import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import DashboardScreen from './components/dashboard/dashboard';
import PendingView from './components/transactionView/pendingView';
import OnBorrowView from './components/transactionView/onBorrowView';
import ReturnCompletedView from './components/transactionView/returnCompletedView';


function App() {
  return (
    <div className="App">
      <ReturnCompletedView/>
    </div>
  );
}

export default App