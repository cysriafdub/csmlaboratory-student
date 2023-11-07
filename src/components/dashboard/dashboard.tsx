
import header from '../../assets/headerlogo.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import CircleIcon from '@mui/icons-material/Circle';

import { useState } from 'react';
import { Link } from 'react-router-dom';


function DashboardScreen() {
    const [selectedItem, setSelectedItem] = useState('pending');
    const handleButtonClick = (item: string) => {
        setSelectedItem(item);
      };

      const pendingItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending'
        }
        
       
      ]
      const onBorrowItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Borrowing'
        }
        
       
      ]
      const returnItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Completed'
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Checking'
          }
        
       
      ]
      const breakageItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Completed'
        },
        {
            id: 1034,
            date: 'August 19, 2023',
            time: '9:00am',
            status: 'Breakage'
          }
        
       
      ]
    
    
    
    

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
                className={`buttonItemsStatus ${selectedItem === 'pending' ? 'button-active' : ''}`}
                onClick={() => handleButtonClick('pending')}
                
            
            >
                <div className="iconStatus">
                <HourglassBottomTwoToneIcon />
                </div>
                <div className="buttonName">Pending</div>
            </Link>

            <Link to ='/on-borrow'
                className={`buttonItemsStatus ${selectedItem === 'on-borrow' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('on-borrow')}
                >
                <div className="iconStatus">
                <BackHandOutlinedIcon />
                </div>
                <div className="buttonName">On-Borrow</div>
            </Link>

            <Link to='/return'
                className={`buttonItemsStatus ${selectedItem === 'return' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('return')}
            >
                <div className="iconStatus">
                <ThumbUpOutlinedIcon />
                </div>
                <div className="buttonName">Return</div>
            </Link>

            <Link to ='/breakage'
                className={`buttonItemsStatus ${selectedItem === 'breakage' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('breakage')}
            >
                <div className="iconStatus">
                <BrokenImageOutlinedIcon />
                </div>
                <div className="buttonName">Breakage</div>
            </Link>
            </div>


        {/* transaction containers */}
        <div className="transactionView">
        {selectedItem === 'pending' && (
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

        

        {selectedItem === 'on-borrow' && (
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
        selectedItem === 'return' && (
            returnItems.map((item) => (
            <Link
                to={item.status === 'Completed' ? `/return/view/completed/${item.id}` : `/return/view/checking/${item.id}`}
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
                        item.status === 'Completed'
                            ? 'retStatusCompleted'
                            : 'retStatusChecking'
                        }
                    />
                    </div>
                    <div
                    className={
                        item.status === 'Completed'
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

            
        {selectedItem === 'breakage' && (
            breakageItems.map((item)=>(
                <Link
                to={item.status === 'Completed' ? `/breakage/view/completed/${item.id}` : `/breakage/view/${item.id}`}
                className="transactionContainerBreakage"
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
                                item.status === 'Completed'
                                    ? 'breakStatusCompleted'
                                    : 'breakStatus'
                                }
                            />
                            
                           </div>
                           <div
                            className={
                                item.status === 'Completed'
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

            
        </div>
        

    </div>
);
}

export default DashboardScreen;
