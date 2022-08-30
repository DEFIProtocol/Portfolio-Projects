import React, { useState, useEffect } from 'react';
import {MenuFoldOutlined, MenuOutlined} from '@ant-design/icons';
import {Menu, Button} from 'antd';


var style = {
    header: { 
        positon: "fixed",
        top: "0px",
        width: "100%",
        height: "40px",
        color: "lime",
        textAlign: "center",
        backgroundColor: "#202020",
    },
    name: {
        float: "left",
        color: "lime",
        margin: "5px auto",
        marginLeft: "5px",
        fontSize: "1.25em",
    },
    pages: {
        width: "100%",
    },
    page: {
        float: "right",
        marginLeft: "5%",
        marginTop: "10px",
        marginRight: "5px",
    }
}

function Navbar() {

  return (
        <div style={style.header}>
        <div style={style.name}>Beau Allgood</div>
        <div style={style}>
            <button style={{
                float: "right",
                marginLeft: "5%",
                marginTop: "10px",
                marginRight: "5px",
                backgroundColor: "lime",
                borderRadius: ".5em"}}>
            Resume</button>

            <a style={style.page} to="/About">Contact</a>
            <a style={style.page} to="/About">Work</a>
            <a style={style.page} to="/About">Projects</a>
            <a style={style.page} to="/About">About</a>
        </div>
        </div>
  )
}

export default Navbar