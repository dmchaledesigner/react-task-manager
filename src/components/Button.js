import React from 'react'

const Button = ({ type, onClick, color, text }) => {
    return (
        <>
            <button
                className="btn"
                type={type}
                onClick={onClick}
                style={{ backgroundColor: color }}>{text}
            </button>
        </>
    )
}



Button.defaultProps = {
    type: 'text',
    color: 'red',
    text: 'Click here',

}

export default Button
