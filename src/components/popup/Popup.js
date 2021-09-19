import './Popup.css'
import React from 'react'
import closeIcon from '../../assets/window-close.svg'
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
                close
                </button>
                {children}
            </div>
        </div>
    ): "";
}

export default Popup
