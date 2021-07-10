import React from 'react';
import Button from './Button';

const Header = ({ title, toggleForm, color, text, showForm }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color={showForm ? 'gray' : 'red'}
                style={{ backgroundColor: color }}
                text={showForm ? 'Close' : 'Add Task'}
                onClick={toggleForm}
            />
        </header>
    )
}




Header.defaultProps = {
    title: 'Task Manager',
}

export default Header




