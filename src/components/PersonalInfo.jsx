import React from 'react';
import { Card } from 'antd';
import { Image } from "cloudinary-react";

const style = {
    heading: {
        color: "lime",
        textAlign: "left",
        marginLeft: "20%",
    },
    card: {
        width: "60%",
    },
    name: {
        marginLeft: "20%"
    },
    text: {
        color: "#909090",
    },
    image: {
        height: "300px",
        float: "right",
        paddingTop: "70px",
        marginRight: "70px"
    },
    page: {
        backgroundColor: "#202020",
        color: "#909090",
        margin: "15px",
        padding: "20px",
        height: "100%",       
    }
}

function PersonalInfo() {

  return (
    <div style={style.page}>
        <Image
                publicId={"jv7omjjwryfbk6v3x51q"}
                cloudName="gridlock"
                style={style.image}
                />
        <Card style={style.card}>
            <div style={style.heading}>
                <h4>Hello, my name is</h4>
                <h2 style={style.name}>Beau Allgood</h2>
            </div>
            <span style={style.text}>I am a full-stack software engineer with experience in web development, sql and no sql servers, blockchain, and data analytics. My passion for technology began when I was near completion of my bachelor's in economics degree. After coming to the conclusion that software development was a continuously adapting field, I knew this was an opportunity for me to learn and grow. This has led me to at just shy of 2 years of development experience and a desire to innovate.</span>
            <h4 style={{color: "lime"}}>Programming Languages</h4>
            <ul style={{color: "lime"}}>
                <li>Javascript / Node</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>HTML / CSS</li>
                <li>SQL</li>
                <li>R</li>
            </ul>
        </Card>
    </div>
  )
}

export default PersonalInfo