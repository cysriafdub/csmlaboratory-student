import * as React from 'react';
import BorrowLogo from '../../assets/BorrowLogo.png'
import Check from '../../assets/check.png'

function RequestConfirm() {
    return (
        <div className='requestConfirmPage'>
            <div>
                <img src={BorrowLogo}/>
            </div>
            <div>
                <img src={Check}/>
            </div>
            <div>
                <p className='requestDesc'>Your request is now processing,
Your request ID is </p>
            </div>
            <div>
                <h1>#001</h1>
            </div>
            <div className='seeLiveBtnContainer'>
                <button className='seeLiveBtn'>See Live Status</button>
            </div>
            <div>
                <button className='backToHomeBtn'>Back to Home</button>
            </div>

        </div>
    );
}

export default RequestConfirm;