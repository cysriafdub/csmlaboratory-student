import React from 'react';
import LoginLogo from '../../assets/LoginLogo.png'
import Group from '../../assets/Group.png'

function Login() {
    return (
        <div className='loginContainer'>
            <div className='logoContainer mainlogo'><img className='logo' src={LoginLogo}></img></div>
            <div>
                <form>
                    <div className='form-container'>
                        <input className='inputField' placeholder='ID Number'></input>
                    </div>
                    <div className='form-container'>
                        <input className='inputField' type='password' placeholder='Password'></input>
                    </div>
                    <div className='form-container'><button className='loginButton'>Login</button></div>
                    
                </form>
                <div className='form-container'> <a className='forgotPass' href='/'>Forgot Password?</a></div>
                
                <div className='logoContainer grouplogo'><img className='logo' src={Group}></img></div>
            </div>
        </div>
    );
}

export default Login;