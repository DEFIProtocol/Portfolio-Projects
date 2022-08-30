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
            <span style={style.text}>Im a software engineer with experience in Blockchain, Data Analytics, and Web Development. My passion for technology began when I was near completion of a bachelor’s in economics. It taught me that I possessed an ability to come to logical real-world conclusions by analyzing data. This led me to a belief that Data Analytics was a field where I could provide the most good for organizations and people.</span>
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