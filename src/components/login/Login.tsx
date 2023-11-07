import React, { useState } from 'react';
import LoginLogo from '../../assets/LoginLogo.png'
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className='loginContainer'>
            <div className='logoContainer mainlogo'><img className='logo' src={LoginLogo} alt="Login Logo" /></div>
            <div>
                <form>
                    <div className='form-container'>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder='ID Number'
                            sx={{
                                width: 300,
                                marginBottom: 3,
                                borderColor: 'black'
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
                    <div className='form-container'>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            sx={{
                                width: 300,
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className='form-container loginbtncontainer'> 
                    <Link to='/dashboard' className='loginButton'>Login</Link></div>
                </form>
                <div className='fpContainer'> 
                    <Link to="/forgot-password">
                        <a className='forgotpass' href='/'>Forgot Password?</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
