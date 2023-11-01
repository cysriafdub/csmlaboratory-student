import React from 'react';
import logo from './logo.svg';
import './App.css';
import BorrowingForm from './components/borrowForm/BorrowingForm';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import RequestConfirm from './components/requestConfirm/RequestConfirm';
import Login from './components/login/Login';
import DashboardScreen from './components/dashboard/dashboard';
import PendingView from './components/transactionView/pendingView';
import OnBorrowView from './components/transactionView/onBorrowView';
import ReturnCompletedView from './components/transactionView/returnCompletedView';
import ReturnCheckingView from './components/transactionView/returnCheckingView';
import BreakageView from './components/transactionView/breakageView';
import BreakageCompletedView from './components/transactionView/breakageCompletedView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/borrow-form" element={<BorrowingForm />} />
          <Route path='/request-confirm' element={<RequestConfirm />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/pending" element={<DashboardScreen />} />
          <Route path="/on-borrow" element={<DashboardScreen/>} />
          <Route path="/return" element={<DashboardScreen/>} />
          <Route path="/breakage" element={<DashboardScreen/>} />

          <Route path="/pending/view/:id" element={<PendingView/>} />
          <Route path="/on-borrow/view/:id" element={<OnBorrowView/>} />
          <Route path="/return/view/:id" element={<ReturnCompletedView/>} />
          <Route path="/breakage/view/:id" element={<BreakageView/>} />



      </Routes>
    </div>
    </Router>
  );
}

export default App 