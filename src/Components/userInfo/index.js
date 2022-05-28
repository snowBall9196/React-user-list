import React from 'react';
import "../../Styles/index.css";

const UserInfo = (props) => {
    const closeCard = (uuid, show) => {
        props.parentCallback(uuid,show);
    }
    const {gender, name, picture, login} = props.user;
    return (
        <div className='card'>
            <svg viewBox="0 0 24 24" focusable="false" onClick={() => closeCard(login.uuid, false)}
                className="chakra-icon close-icon">
                <path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z">
                </path>
            </svg>
            <div className='cardHeader'>
                
            </div>
            <div className='cardImgContent'>
                <div className='cardImg'>
                    <img alt="Profile Image" className='chakra-image userImg'
                    src={picture.thumbnail} />    
                </div>
            </div>
            <p className='userName'>{name.first + name.last}</p>
            <p className='userGender'>{gender}</p>
            <button className='chakra-button userBtn' onClick={() => closeCard(login.uuid, true)}>Connect</button>
        </div>
    )
}

export default UserInfo;