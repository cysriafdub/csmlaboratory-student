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

  const filteredItems = allItems.filter((item) => {
    const lowerCaseStatus = item.status.toLowerCase();

    switch (selectedStatus) {
      case "pending":
        return lowerCaseStatus === "pending";
      case "approved":
        return lowerCaseStatus === "approved";
      case "breakage":
        return lowerCaseStatus === "breakage" || lowerCaseStatus === "resolved";
      case "completed":
        return lowerCaseStatus === "completed";
      case "returning":
        return lowerCaseStatus === "returning";
      case "rejected":
        return lowerCaseStatus === "rejected";
      default:
        return true;
    }
  });

  const getStatusClassName = (status: string) => {
    const lowerCaseStatus = status.toLowerCase();

    switch (lowerCaseStatus) {
      case "pending":
        return "Pending";
      case "approved":
        return "Approved";
      case "breakage":
        return "Breakage"; // Style for 'Breakage' status
      case "resolved":
        return "Resolved"; // Style for 'Resolved' status
      case "completed":
        return "Completed";
      case "returning":
        return "Returning";
      case "rejected":
        return "Rejected";
      default:
        return ""; // Handle any other cases or set a default class
    }
  };

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
            selectedStatus === "pending" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("pending")}
        >
          <div className="iconStatus">
            <HourglassBottomTwoToneIcon />
          </div>
          <div className="buttonName">Pending</div>
        </Link>

        <Link
          to="/on-borrow"
          className={`buttonItemsStatus ${
            selectedStatus === "approved" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("approved")}
        >
          <div className="iconStatus">
            <ThumbUpOutlinedIcon />
          </div>
          <div className="buttonName">On-Borrow</div>
        </Link>

        <Link
          to="/returning"
          className={`buttonItemsStatus ${
            selectedStatus === "returning" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("returning")}
        >
          <div className="iconStatus">
            <BackHandOutlinedIcon />
          </div>
          <div className="buttonName">Pending Return </div>
        </Link>

        <Link
          to="/returned"
          className={`buttonItemsStatus ${
            selectedStatus === "completed" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("completed")}
        >
          <div className="iconStatus">
            <CheckCircleIcon />
          </div>
          <div className="buttonName">Returned</div>
        </Link>

        <Link
          to="/breakage"
          className={`buttonItemsStatus ${
            selectedStatus === "breakage" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("breakage")}
        >
          <div className="iconStatus">
            <FlashOffIcon />
          </div>
          <div className="buttonName">Breakage</div>
        </Link>

        <Link
          to="/rejected"
          className={`buttonItemsStatus ${
            selectedStatus === "rejected" ? "button-active" : ""
          }`}
          onClick={() => handleStatusClick("rejected")}
        >
          <div className="iconStatus">
            <ThumbDownIcon />
          </div>
          <div className="buttonName">Rejected</div>
        </Link>
      </div>

      {filteredItems.map((item) => {
        console.log("Selected Status in Borrowing component:", selectedStatus);
        return (
          <div className="transactionView">
            <TransactionItem
              item={item}
              linkTo={`/${item.status.toLowerCase()}/view/${item.id}`}
              statusIcon={`icon${getStatusClassName(item.status)}`}
              statusText={`item${getStatusClassName(item.status)}StatusText`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DashboardScreen;
