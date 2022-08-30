import React from 'react';
import { Card } from 'antd';
import MyImage from './Photos/20220829_164408.jpg'

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
    console.log(MyImage)

  return (
    <div style={style.page}>
        <img style={style.image} src={MyImage}></img>
        <Card style={style.card}>
            <div style={style.heading}>
                <h4>Hello, my name is</h4>
                <h2 style={style.name}>Beau Allgood</h2>
            </div>
            <span style={style.text}>I'm a software engineer with experience in Blockchain, Data Analytics, and Web Development. My passion for programming began when I was near completion of a Bachealors in Economics. It taught that I possessed an ability to come to logical real-world conclusions by analyzing data. This had led me to a belief that this field is where I could provide the most help to society and organization growth.</span>
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