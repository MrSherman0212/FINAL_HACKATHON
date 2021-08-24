import React, { useState } from 'react';
import { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import './Content.css';

const List = () => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    const { mode, shadow } = useContext(clientContext)

    const handleMouseMove = event => {
        setX(event.clientX)
        setY(event.clientY)
    }
    const blockClass = {
        boxShadow: `${mode ? 0 : (-x / 100)}px ${(-y / 100)}px 20px 0px ${shadow}`
    }

    return (
        <div className={`${mode ? "dark" : "light"} list`} onMouseMove={handleMouseMove}>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
            <div className={`${mode ? "dark" : "light"} block-class`} style={blockClass} ></div>
        </div >
    );
};

export default List;