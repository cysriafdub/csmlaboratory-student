
import header from '../../assets/headerlogo.png'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function OnBorrowView() {
    
   
        const pendingItems = [
            {
              id: 1034,
              date: 'August 19, 2023',
              time: '9:00am',
              status: 'On-borrow',
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
    <div className='viewContent'>
      
       <div className="headerView">
           <KeyboardBackspaceIcon className='viewArrowIcon'/>
           <img src={header} alt="Header Logo" className="mainlogoView" />
        </div>


      
        {pendingItems.map((item) => (
            <div className="papercontentStatus">
                <div className="viewStatusOnBorrow">
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

                <div className="viewConfirmation">
                    <div className="firstRowConfirm">
                        <div className="checkIconButton">
                            <CircleOutlinedIcon  className='customeCircle' sx={{ stroke: "white", strokeWidth: 1 }}/>
                        </div>
                        <div className="confirmationTxt">
                            I certify that the above item(s) wil be returned in good condition.
                        </div>

                    </div>

                    <div className="returnViewButton">
                        Return
                    </div>
                </div>
            </div>
            ))}

      
    </div>
    );
}

export default OnBorrowView;
