import React from 'react';
import logo from './logo.svg';
import './App.css';
import BorrowingForm from './components/borrowForm/BorrowingForm';
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
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import Footer from './components/footer/footer';
import RejectedView from './components/transactionView/rejectedView';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
          
          <Route path="/" element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path="/borrow-form" element={<BorrowingForm />} />
          <Route path='/request-confirm' element={<RequestConfirm />} />

          <Route path="/dashboard" element={<DashboardScreen />} />

          <Route path="/pending" element={<DashboardScreen />} />
          <Route path="/on-borrow" element={<DashboardScreen/>} />
          <Route path="/returning" element={<DashboardScreen/>} />
          <Route path="/returned" element={<DashboardScreen/>} />
          <Route path="/completed" element={<DashboardScreen/>} />
          <Route path="/breakage" element={<DashboardScreen/>} />
          <Route path="/rejected" element={<DashboardScreen/>} />


          <Route path="/Pending/view/:id" element={<PendingView/>} />
          <Route path="/On-borrow/view/:id" element={<OnBorrowView/>} />
          <Route path="/Breakage/view/:id" element={<BreakageView/>} />
          <Route path="/Resolved/view/:id" element={<BreakageCompletedView/>} />

          <Route path="/Approved/view/:id" element={<OnBorrowView/>} />
          <Route path="/Returning/view/:id" element={<ReturnCheckingView/>} />
          <Route path="/Completed/view/:id" element={<ReturnCompletedView/>} />
          <Route path="/Rejected/view/:id" element={<RejectedView/>} />



      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}

export default App 