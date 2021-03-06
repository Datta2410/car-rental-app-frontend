import './Popup.css'
import React from 'react'
import closeIcon from '../../assets/cancel.png'
const Popup = ({
    children,
    setTrigger,
    Trigger
}) => {
    return Trigger ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button 
                className='close-button'
                onClick={() => setTrigger()}>
                <img 
                className='close-img'
                alt='Loading'
                src={closeIcon}/>
                </button>
                {children}
            </div>
        </div>
    ): "";
}

export default Popup
