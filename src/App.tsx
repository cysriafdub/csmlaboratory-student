import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import DashboardScreen from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <DashboardScreen />
    </div>
  );
}

export default App