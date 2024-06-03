import React, { useState } from 'react';
import './login.css'; // Import CSS file with styles

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFocusUsername = () => {
        // Manipulate state to change styles for username focus
        setEyeBallStyles({ eyeball1: { top: '20px', left: '13px' }, eyeball2: { top: '20px', left: '8px' } });
        setHandStyles({ handl: { transform: 'rotate(0deg)', bottom: '140px', left: '50px', height: '45px', width: '35px' }, handr: { transform: 'rotate(0deg)', bottom: '185px', left: '250px', height: '45px', width: '35px' } });
    };

    const handleFocusPassword = () => {
        // Manipulate state to change styles for password focus
        setEyeBallStyles({ eyeball1: { top: '10px', left: '10px' }, eyeball2: { top: '10px', left: '10px' } });
        setHandStyles({ handl: { transform: 'rotate(-150deg)', bottom: '215px', left: '105px', height: '90px', width: '40px' }, handr: { transform: 'rotate(150deg)', bottom: '308px', left: '192px', height: '90px', width: '40px' } });
    };

    const [eyeBallStyles, setEyeBallStyles] = useState({ eyeball1: {}, eyeball2: {} });
    const [handStyles, setHandStyles] = useState({ handl: {}, handr: {} });

    return (
        <div className='h-[85vh] w-full absolute flex justify-center items-center'>
            <div className='absolute p-8'>
            <div className="login rounded-3xl bg-blue-300">
                <i className="fa fa-user" aria-hidden="true">&nbsp;&nbsp;</i>
                <input type="text" value={username} onChange={handleUsernameChange} className='p-2 rounded-xl' placeholder='username' onFocus={handleFocusUsername} />
                <br /><br />
                <i className="fa fa-unlock-alt" aria-hidden="true">&nbsp;&nbsp;</i>
                <input type="password" value={password} onChange={handlePasswordChange} className='p-2 rounded-xl' placeholder='password' onFocus={handleFocusPassword} />
                <br /><br />
                <button type="button " className='primary-btn'>Login</button>
            </div>
            <div className="backg">
                <div className="panda">
                    <div className="earl"></div>
                    <div className="earr"></div>
                    <div className="face">
                        <div className="blshl"></div>
                        <div className="blshr"></div>
                        <div className="eyel">
                            <div className="eyeball1" style={eyeBallStyles.eyeball1}></div>
                        </div>
                        <div className="eyer">
                            <div className="eyeball2" style={eyeBallStyles.eyeball2}></div>
                        </div>
                        <div className="nose">
                            <div className="line"></div>
                        </div>
                        <div className="mouth">
                            <div className="m">
                                <div className="m1"></div>
                            </div>
                            <div className="mm">
                                <div className="m1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pawl">
                <div className="p1">
                    <div className="p2"></div>
                    <div className="p3"></div>
                    <div className="p4"></div>
                </div>
            </div>
            <div className="pawr">
                <div className="p1">
                    <div className="p2"></div>
                    <div className="p3"></div>
                    <div className="p4"></div>
                </div>
            </div>
            <div className="handl" style={handStyles.handl}></div>
            <div className="handr" style={handStyles.handr}></div>
            </div>
        </div>
    );
}

export default Login;
