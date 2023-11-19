
import header from '../../assets/headerlogo.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import TransactionItem from './tapViewTransaction';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function DashboardScreen() {
    const [selectedStatus, setselectedStatus] = useState('pending');
  

    const handleStatusClick = (status: string) => {
        setselectedStatus(status);
    };
  

    const allItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Approved'
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Resolved'
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Breakage'
          },
        {
          id: 1234,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending'
        },
        {
          id: 1035,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Completed'
        },
        {
          id: 1035,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Returning'
        },
        {
          id: 1035,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Rejected'
        },
        {
          id: 1235,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Approved'
        },
        {
          id: 1036,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Rejected'
        },
      ];
    
      const filteredItems = allItems.filter(item => item.status.toLowerCase() === selectedStatus);
    

return (
    <div className='DashboardContent'>
        <div className="logocontainerD">
        <img src={header} alt="Header Logo" className="mainlogoD" />
        </div>

        <div className="firstContent">
            <div className="leftlabel">
                <div className="iconContainer">
                    <AccountCircleIcon/>
                    
                </div>
                <div className="leftlabelstudent">
                <div className="idNumber">
                        2017100196
                </div>
                <div className="status">
                    Status: <span>Cleared</span>
                </div>
                </div>
            </div>
            <Link to='/' className="rightlabel">
                        <LogoutIcon className='logoutIcon'/>
                        <div className='rightText'> Logout </div>
            </Link>
        </div>

        <div className="dashboardLabel">
            Dashboard
        </div>


        <Link to ='/borrow-form' className="borrowItemsButton">
            Click to Request Borrow Items
        </Link>

        

        {/* 4 buttons */}

        <div className="buttonsView">
            <Link to='/pending'
                className={`buttonItemsStatus ${selectedStatus === 'pending' ? 'button-active' : ''}`}
                onClick={() => handleStatusClick('pending')}
                
            
            >
                <div className="iconStatus">
                <HourglassBottomTwoToneIcon />
                </div>
                <div className="buttonName">Pending</div>
            </Link>

            <Link to ='/on-borrow'
                className={`buttonItemsStatus ${selectedStatus === 'approved' ? 'button-active' : ''}`}
                
                onClick={() => handleStatusClick('approved')}
                >
                <div className="iconStatus">
                <BackHandOutlinedIcon />
                </div>
                <div className="buttonName">On-Borrow</div>
            </Link>

            <Link to ='/returning'
                className={`buttonItemsStatus ${selectedStatus === 'returning' ? 'button-active' : ''}`}
                
                onClick={() => handleStatusClick('returning')}
                >
                <div className="iconStatus">
                <BackHandOutlinedIcon />
                </div>
                <div className="buttonName">Pending Return </div>
            </Link>


            <Link to='/returned'
                className={`buttonItemsStatus ${selectedStatus === 'completed' ? 'button-active' : ''}`}
                
                onClick={() => handleStatusClick('completed')}
            >
                <div className="iconStatus">
                <ThumbUpOutlinedIcon />
                </div>
                <div className="buttonName">Returned</div>
            </Link>

            <Link to ='/breakage'
                className={`buttonItemsStatus ${selectedStatus === 'breakage' ? 'button-active' : ''}`}
                
                onClick={() => handleStatusClick('breakage')}
            >
                <div className="iconStatus">
                <BrokenImageOutlinedIcon />
                </div>
                <div className="buttonName">Breakage</div>
            </Link>
            
            <Link to ='/rejected'
                className={`buttonItemsStatus ${selectedStatus === 'rejected' ? 'button-active' : ''}`}
                
                onClick={() => handleStatusClick('rejected')}
            >
                <div className="iconStatus">
                <BrokenImageOutlinedIcon />
                </div>
                <div className="buttonName">Rejected</div>
            </Link>
            </div>
     


         
        {filteredItems.map((item) => {
          console.log("Selected Status in Borrowing component:", selectedStatus);
          return (
            <TransactionItem
              key={item.id}
              item={item}
              linkTo={`/${selectedStatus}/view/${item.id}`}
              statusIcon={`icon${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}`}
              statusText={`item${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}StatusText`}
             

            />
          );
        })}

        {/* transaction containers
        <div className="transactionView">
        {selectedStatus === 'pending' && (
            pendingItems.map((item) => (
                <Link to ={`/pending/view/${item.id}`} className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                     Transaction ID #{item.id}
                    </div>
                    <div className="currentStatus">
                    <div className="iconCurrentStatus">
                        <CircleIcon />
                    </div>
                    <div className='penStatus'>   {item.status} </div>
                    </div>
                </div>
                <div className="transSecondRow">
                    <div className="timeanddate">
                    <div> {item.date}</div>
                    <div>{item.time}</div>
                    </div>
                    <div className="pendingCancel">
                    Cancel
                    </div>
                </div>
                <div className="transThirdRow">
                    Tap to View
                </div>
                </Link>
            ))
            )}

        

        {selectedStatus === 'approved' && (
            onBorrowItems.map((item) => (
            <Link to ={`/on-borrow/view/${item.id}`} className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                             Transaction ID #{item.id}
                    </div>
                    <div className="currentStatus">
                            <div className="iconCurrentStatus">
                            <CircleIcon className='obStatus'/>
                            
                           </div>
                           <div className='obStatus'> {item.status} </div>

                    </div>

                </div>


                <div className="transSecondRow">
                        <div className="timeanddate">
                        <div>{item.date}</div> 
                        <div>{item.time}</div>
                        </div>

                        <div className="obReturn">
                            Return
                        </div>

                        
                </div>
                    
                <div className="transThirdRow">
                    Tap to View
                </div>
            </Link>
            
            ))
            )}
        
        {
        selectedStatus === 'returning' || 'completed' && (
            returnItems.map((item) => (
            <Link
                to={item.status === 'Returned' ? `/return/view/completed/${item.id}` : `/return/view/checking/${item.id}`}
                className="transactionContainer"
                key={item.id}
            >
                <div className="transFirstRow">
                <div className="transactionID">
                    Transaction ID #{item.id}
                </div>
                <div className="currentStatus">
                    <div className="iconCurrentStatus">
                    <CircleIcon
                        className={
                        item.status === 'Returned'
                            ? 'retStatusCompleted'
                            : 'retStatusChecking'
                        }
                    />
                    </div>
                    <div
                    className={
                        item.status === 'Returned'
                        ? 'retStatusCompleted'
                        : 'retStatusChecking'
                    }
                    >
                    {item.status}
                    </div>
                </div>
                </div>

                <div className="transSecondRow">
                <div className="timeanddate">
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                </div>
                </div>

                <div className="transThirdRow">
                    Tap to View
                </div>
            </Link>
            ))
        )
        }

            
        {selectedStatus === 'breakage' && (
            breakageItems.map((item)=>(
                <Link
                to={item.status === 'Resolved' ? `/breakage/view/completed/${item.id}` : `/breakage/view/${item.id}`}
                className="transactionContainer"
                key={item.id}
            >
                <div className="transFirstRow">
                    <div className="transactionID">
                    Transaction ID #{item.id}
                    </div>
                    <div className="currentStatus">
                            <div className="iconCurrentStatus">
                         
                            <CircleIcon
                                className={
                                item.status === 'Resolved'
                                    ? 'breakStatusCompleted'
                                    : 'breakStatus'
                                }
                            />
                            
                           </div>
                           <div
                            className={
                                item.status === 'Resolved'
                                ? 'breakStatusCompleted'
                                : 'breakStatus'
                            }
                            >
                            {item.status}
                            </div>

                    </div>

                </div>


                <div className="transSecondRow">
                        <div className="timeanddate">
                        <div>{item.date}</div> 
                        <div>{item.time}</div>
                        </div>
                        
                </div>
                    
                <div className="transThirdRow">
                    Tap to View
                </div>
            </Link>
            ))
            )}

            
        </div> */}
        

    </div>
);
}

export default DashboardScreen;
