import header from "../../assets/headerlogo.png";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HourglassBottomTwoToneIcon from "@mui/icons-material/HourglassBottomTwoTone";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import TransactionItem from "./tapViewTransaction";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlashOffIcon from "@mui/icons-material/FlashOff";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function DashboardScreen() {
  const [selectedStatus, setselectedStatus] = useState("pending");

  const handleStatusClick = (status: string) => {
    console.log("Clicked status:", status);
    setselectedStatus(status);
  };

  const allItems = [
    {
      id: 1034,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Approved",
    },
    {
      id: 1034,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Resolved",
    },
    {
      id: 1034,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Breakage",
    },
    {
      id: 1234,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Pending",
    },
    {
      id: 1035,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Completed",
    },
    {
      id: 1035,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Returning",
    },
    {
      id: 1035,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Rejected",
    },
    {
      id: 1235,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Approved",
    },
    {
      id: 1036,
      date: "August 19, 2023",
      time: "9:00am",
      status: "Rejected",
    },
  ];

  const filteredItems = allItems.filter(item => {
    if (selectedStatus === "Breakage") {
      return item.status === "Breakage" || item.status === "Resolved"; 
      // for generating/changing classname in transactionItem, line(215)
    } else {
      return item.status === selectedStatus;
    }
  });
  
  

  return (
    <div className="DashboardContent">
      <div className="logocontainerD">
        <img src={header} alt="Header Logo" className="mainlogoD" />
      </div>

      <div className="firstContent">
        <div className="leftlabel">
          <div className="iconContainer">
            <AccountCircleIcon />
          </div>
          <div className="leftlabelstudent">
            <div className="idNumber">2017100196</div>
            <div className="status">
              Status: <span>Cleared</span>
            </div>
          </div>
        </div>
        <Link to="/" className="rightlabel">
          <LogoutIcon className="logoutIcon" />
          <div className="rightText"> Logout </div>
        </Link>
      </div>

      <div className="dashboardLabel">Dashboard</div>

      <Link to="/borrow-form" className="borrowItemsButton">
        Click to Request Borrow Items
      </Link>

      {/* 4 buttons */}

      <div className="buttonsView">
        <Link
          to="/pending"
          className={`buttonItemsStatus ${
            selectedStatus === "Pending" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Pending")}
        >
          <div className="iconStatus">
            <HourglassBottomTwoToneIcon />
          </div>
          <div className="buttonName">Pending</div>
        </Link>

        <Link
          to="/on-borrow"
          className={`buttonItemsStatus ${
            selectedStatus === "Approved" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Approved")}
        >
          <div className="iconStatus">
            <ThumbUpOutlinedIcon />
          </div>
          <div className="buttonName">On-Borrow</div>
        </Link>

        <Link
          to="/returning"
          className={`buttonItemsStatus ${
            selectedStatus === "Returning" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Returning")}
        > 
          <div className="iconStatus">
            <BackHandOutlinedIcon />
          </div>
          <div className="buttonName">Pending Return </div>
        </Link>

        <Link
          to="/returned"
          className={`buttonItemsStatus ${
            selectedStatus === "Completed" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Completed")}
        >
          <div className="iconStatus">
            <CheckCircleIcon />
          </div>
          <div className="buttonName">Returned</div>
        </Link>

        <Link
          to="/breakage"
          className={`buttonItemsStatus ${
            selectedStatus === "Breakage" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Breakage")}
        >
          <div className="iconStatus">
            <FlashOffIcon />
          </div>
          <div className="buttonName">Breakage</div>
        </Link>

        <Link
          to="/rejected"
          className={`buttonItemsStatus ${
            selectedStatus === "Rejected" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("Rejected")}
        >
          <div className="iconStatus">
            <ThumbDownIcon />
          </div>
          <div className="buttonName">Rejected</div>
        </Link>
      </div>

     
    
    {/* transaction mini items for each button  */}
      {filteredItems.map((item) => {
        console.log("Selected Status in Borrowing component:", selectedStatus);
        return (
          <div className="transactionView">
            <TransactionItem
              item={item}
              linkTo={`/${item.status}/view/${item.id}`}
              statusIcon={`icon${item.status.charAt(0).toUpperCase() + item.status.slice(1)}`}
              statusText={`item${item.status.charAt(0).toUpperCase() + item.status.slice(1)}StatusText`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DashboardScreen;
