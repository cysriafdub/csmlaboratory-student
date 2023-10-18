import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import DashboardScreen from './components/dashboard/dashboard';
import PendingView from './components/transactionView/pendingView';

function App() {
  return (
    <div className="App">
      <PendingView />
    </div>
  );
}

export default App