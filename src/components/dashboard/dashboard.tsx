
import header from '../../assets/headerlogo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import LogoutIcon from '@mui/icons-material/Logout';

import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

import CircleIcon from '@mui/icons-material/Circle';

import { useState } from 'react';
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
            <div className="rightlabel">
                        <LogoutIcon className='logoutIcon'/>
                        <div className='rightText'> Logout </div>
            </div>
        </div>

        <div className="dashboardLabel">
            Dashboard
        </div>


        <div className="borrowItemsButton">
            Click to Request Borrow Items
        </div>

        

        {/* 4 buttons */}

        <div className="buttonsView">
            <button 
                className={`buttonItemsStatus ${selectedItem === 'pending' ? 'button-active' : ''}`}
                onClick={() => handleButtonClick('pending')}
                
            
            >
                <div className="iconStatus">
                <HourglassBottomTwoToneIcon />
                </div>
                <div className="buttonName">Pending</div>
            </button>

            <button 
                className={`buttonItemsStatus ${selectedItem === 'on-borrow' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('on-borrow')}
                >
                <div className="iconStatus">
                <BackHandOutlinedIcon />
                </div>
                <div className="buttonName">On-Borrow</div>
            </button>

            <button 
                className={`buttonItemsStatus ${selectedItem === 'return' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('return')}
            >
                <div className="iconStatus">
                <ThumbUpOutlinedIcon />
                </div>
                <div className="buttonName">Return</div>
            </button>

            <button 
                className={`buttonItemsStatus ${selectedItem === 'breakage' ? 'button-active' : ''}`}
                
                onClick={() => handleButtonClick('breakage')}
            >
                <div className="iconStatus">
                <BrokenImageOutlinedIcon />
                </div>
                <div className="buttonName">Breakage</div>
            </button>
            </div>


        {/* transaction containers */}
        <div className="transactionView">
        {selectedItem === 'pending' && (
            pendingItems.map((item) => (
                <div className="transactionContainer">
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
                </div>
            ))
            )}

        

        {selectedItem === 'on-borrow' && (
            <div className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                             Transaction ID #1002
                    </div>
                    <div className="currentStatus">
                            <div className="iconCurrentStatus">
                            <CircleIcon className='obStatus'/>
                            
                           </div>
                           <div className='obStatus'> Borrowing </div>

                    </div>

                </div>


                <div className="transSecondRow">
                        <div className="timeanddate">
                        <div>August 19.2021</div> 
                        <div>9:35 am</div>
                        </div>

                        <div className="obReturn">
                            Return
                        </div>

                        
                </div>
                    
                <div className="transThirdRow">
                    Tap to View
                </div>
            </div>
            )}
        
        {selectedItem === 'return' && (
            <div className="transactionContainer">
                <div className="transFirstRow">
                    <div className="transactionID">
                             Transaction ID #1002
                    </div>
                    <div className="currentStatus">
                            <div className="iconCurrentStatus">
                            <CircleIcon className='retStatus'/>
                            
                           </div>
                           <div className='retStatus'> Completed  </div>

                    </div>

                </div>


                <div className="transSecondRow">
                        <div className="timeanddate">
                        <div>August 19.2021</div> 
                        <div>9:35 am</div>
                        </div>

                       

                        
                </div>
                    
                <div className="transThirdRow">
                    Tap to View
                </div>
            </div>
            )}
        {selectedItem === 'breakage' && (
            <div className="transactionContainerBreakage">
                <div className="transFirstRow">
                    <div className="transactionID">
                    Transaction ID #1002
                    </div>
                    <div className="currentStatus">
                            <div className="iconCurrentStatus">
                            <CircleIcon className='breakStatus'/>
                            
                           </div>
                           <div className='breakStatus'> Breakage  </div>

                    </div>

                </div>


                <div className="transSecondRow">
                        <div className="timeanddate">
                        <div>August 19.2021</div> 
                        <div>9:35 am</div>
                        </div>
                        
                </div>
                    
                <div className="transThirdRow">
                    Tap to View
                </div>
            </div>
            )}

            
        </div>

    </div>
);
}

export default DashboardScreen;
