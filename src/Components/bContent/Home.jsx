import React, { useState } from 'react';
import { useContext } from 'react';
import { clientContext } from '../../Contexts/ClientContext';
import './Content.css';

const Home = () => {
    const [x, setX] = useState()
    const [y, setY] = useState()
    const { mode } = useContext(clientContext)

    const handleMouseMove = event => {
        setX(event.clientX)
        setY(event.clientY)
    }
    const blockClass = {
        boxShadow: `${mode ? 0 : (-x / 50)}px ${mode ? 0 : (-y / 50)}px 10px 0px ${mode ? "#d57cff" : "#666666"}`,
        width: "200px",
        height: "200px",
        backgroundColor: "#fdfdfd",
        margin: "50px",
    }
    const list = {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
    }

    return (
        <div className={mode ? "dark" : "light"} style={list} onMouseMove={handleMouseMove}>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
            <div className={mode ? "dark" : "light"} style={blockClass}></div>
        </div >
    );
};

export default Home;