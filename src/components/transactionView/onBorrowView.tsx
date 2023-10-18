
import header from '../../assets/headerlogo.png'
import check from '../../assets/check.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckIcon from '@mui/icons-material/Check'; 
function onBorrowView() {

    
    
    

return (
    <div className='pendingContent'>
      
       <div className="headerView">
           <KeyboardBackspaceIcon className='viewArrowIcon'/>
           <img src={header} alt="Header Logo" className="mainlogoView" />
        </div>

        <div className="pendingHeaderText">
                Lab technician is<br />
                reviewing and checking for availability<br />
                of items<br />
               
           </div>

        <div className="pendingBar">
            <div className="checkMarkPoint">
                <CheckIcon/>
            </div>
        
           
            <div className="lineIcon"></div>
            <div className="checkMark"/>
            <div className="dashIcon"></div>
            <div className="checkMark"/>
        </div>
        <div className="pendingBarLabel">
                
        </div>

        <div className="viewStatusPending">
            Status:<span>Pending </span>

        </div>

        <div className="viewPaperContent">
            <div className="titleID"> Transaction ID <span>#001</span></div>
            <div className='viewStudentInfo'>
                    <div className='iconProfileContainer'> 
                       <AccountCircleOutlinedIcon/>
                    </div>
                    <div className='student-details'>
                      <div className='student-Name'>
                        Sofia Dara Alilin
                      </div>
                      <div className='student-ID-Dept'>
                        201710092-BSCHEMISTRY
                      </div>
                    </div>
            </div>


            <div className='viewTitleLabel'> Selected Items </div>
            <div className='viewItemsSelected'>         
                  
                        <div className='viewEachInfo'>
                            <div className='eachIndex'>
                                1
                            </div>
                            <div className='eachItemDetails'>
                                Petri Dish
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;
                                10
                            </div>
                        </div>

                     
                
            </div>

            <div className='totalQuantityLabel'>
                <span>Total Borrowed:</span>
                &nbsp;&nbsp;
                10
            </div>

            <div className='viewTitleLabel'>Members </div>
                      
                <div className='viewMembersInfo'>
                  
                    <div className='viewEachInfo'>
                        <div className='eachIndex'>
                        1
                        </div>
                        <div className='eachmemID'>
                    
                        2017810109
                        </div>
                        <div className='eachmemNAME'>
                         Joel Morongot
                            
                        </div>
                    </div>
            </div>

            <div className='viewDateTime'>
                  <div className='viewDate'>
                     August 19, 2021
                  </div>
                  <div className='viewTime'>
                     10:20PM
                  </div>

              </div>

               
        </div>

        <div className="doneViewButton">
            Done View
        </div>
        <div className="cancelViewButton">
            Cancel Request
        </div>

    </div>
    );
}

export default onBorrowView;
