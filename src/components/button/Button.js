import React from 'react'
import './Button.css'
const Button = ({
    onClick,
    children
}) => {
    return (
        <button 
        className='submit-button'
        onClick={onClick}>
            <h3>{children}</h3>
        </button>
    )
}

export default Button
