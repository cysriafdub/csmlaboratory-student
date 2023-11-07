import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <div className='forgotPassPageContainer'>
            <div className="arrowContainer">
                <Link to="/">
                    <button className="arrowButton">
                        <ArrowBackIcon sx={{ width: 40, height: 40 }} />
                    </button>
                </Link>
            </div>
            <div className='contentContainer'>
                <div className='content'>
                    <div className='forgotPasswordHText'>
                        <h1 className='hText'>Forgot Password</h1>
                    </div>
                    <div className="form-container">
                        <form>
                            <div className='labelContainer'>
                                <p>Enter your Email Address</p>
                            </div>
                            <div>
                                <TextField
                                    id="input-with-icon-textfield"
                                    placeholder='Email Address'
                                    sx={{
                                        width: 309,
                                        marginBottom: 3,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <PersonIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                            </div>
                            <button type='submit' className='requestButton'>Request Reset Password</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
