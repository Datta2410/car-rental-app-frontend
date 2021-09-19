import React from 'react'
import './Button.css'
const Button = ({
    onClick,
    children,
    disabled
}) => {
    return (
        <button
        disabled={disabled} 
        className={disabled ? 'submit-button-disabled':'submit-button'}
        onClick={onClick}>
            <h3>{children}</h3>
        </button>
    )
}

export default Button
