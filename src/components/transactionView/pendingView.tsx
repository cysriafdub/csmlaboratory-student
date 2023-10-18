
import header from '../../assets/headerlogo.png'
import check from '../../assets/check.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckIcon from '@mui/icons-material/Check'; 
function PendingView() {
    
   
        const pendingItems = [
            {
              id: 1034,
              date: 'August 19, 2023',
              time: '9:00am',
              status: 'Pending',
              items: 
                [
                    {name: 'Petri Dishes', quantity: 3, breakage: 1},
                     {name: 'Graduated Cylinder', quantity: 6,  breakage: 3},
                     {name: 'Volumetric Flask', quantity: 2,  breakage: 1},
                   
                ]
        
            }
          ]
          const membersDetails =[
            {
               idNumber: 2018542654,
               Name: 'Joel Morongot',
           
            },
            {
              idNumber: 2020100768,
              Name: 'Joel Morongot',
          
           },   
           {
            idNumber: 2020100768,
            Name: 'Trissa Saman Asali Mulan Yee',
        
         }   
        ]
          
        const studentDetails =[
            {
                idNumber: 201854265,
                name: 'Sofia Dara Alilin',
                Dept: 'BSCHEMISTRY'
                
            }   
            ]
    


     
    
    
    

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
           <div className='barLabel'> Requested</div> 
           <div className='barLabel'> Checking </div>
           <div className='barLabel'> Releasing </div>
        </div>
        {pendingItems.map((item) => (
            <div className="papercontentStatus">
                <div className="viewStatusPending">
                    Status:<span>{item.status} </span>

                </div>


    
                <div className="viewPaperContent">

            
                    <div className="titleID"> Transaction ID  &nbsp; <span> #{item.id}</span></div>
                    {studentDetails.map((student)=>(
                    <div className='viewStudentInfo'>
                            <div className='iconProfileContainer'> 
                            <AccountCircleOutlinedIcon/>
                            </div>
                            <div className='student-details'>
                            <div className='student-Name'>
                                {student.name}
                            </div>
                            <div className='student-ID-Dept'>
                                {student.idNumber}-{student.Dept}
                            </div>
                            </div>
                    </div>
                    ))}


                    <div className='viewTitleLabel'> Selected Items </div>
                    <div className='viewItemsSelected'>
                        {item.items.map((selectedItems,index)=>(

                        
                        
                                <div className='viewEachInfo' key ={index}>
                                    <div className='eachIndex'>
                                        {index +1}
                                    </div>
                                    <div className='eachItemDetails'>
                                        {selectedItems.name}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;
                                    {selectedItems.quantity}
                                    </div>
                                </div>      
                            ))}   
                    </div>

                    <div className='totalQuantityLabel'>
                        <span>Total Borrowed:</span>
                        &nbsp;&nbsp;
                        10
                    </div>

                    <div className='viewTitleLabel'>Members </div>
                            
                        <div className='viewMembersInfo'>
                        {membersDetails.map((member, index)=>(     
                            <div className='viewEachInfo' key={index}>
                                <div className='eachIndex'>
                                {index+1}
                                </div>
                                <div className='eachmemID'>
                            
                            {member.idNumber}
                                </div>
                                <div className='eachmemNAME'>
                            {member.Name}
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='viewDateTime'>
                        <div className='viewDate'>
                        {item.date}
                        </div>
                        <div className='viewTime'>
                            {item.time}
                        </div>
                    
                    </div>
            
                </div>
            </div>
            ))}

        <div className="doneViewButton">
            Done View
        </div>
        <div className="cancelViewButton">
            Cancel Request
        </div>

    </div>
    );
}

export default PendingView;
