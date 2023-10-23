import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import DashboardScreen from './components/dashboard/dashboard';
import PendingView from './components/transactionView/pendingView';
import OnBorrowView from './components/transactionView/onBorrowView';
import ReturnCompletedView from './components/transactionView/returnCompletedView';
import ReturnCheckingView from './components/transactionView/returnCheckingView';
import BreakageView from './components/transactionView/breakageView';
import BreakageCompletedView from './components/transactionView/breakageCompletedView';


function App() {
  return (
    <div className="App">
      <BreakageCompletedView/>
    </div>
  );
}

export default App