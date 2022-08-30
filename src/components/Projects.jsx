import React from 'react';
import DAO from './Photos/DAOX.png'
import gridlock from './Photos/gridlock.png'
import houseSales from './Photos/Figure_1.png';
import { GithubOutlined, ProjectOutlined } from "@ant-design/icons";
import { Card } from 'antd';

const style = {
    heading: {
        borderBottom: "1px solid lime",
        padding: "5px",
        color: "lime"
    },
    image: {
        height: "250px",
        width: "250px",
        margin: "15px",
    },
    projectDescription: {
    },
    warning: {
        color: "red",
        margin: "0px auto",
        padding: "5px",
        fontWeight: "bold"
    },
    linksAndDesc: {
        float: "right",
        position: "absolute",
    },
    card: {
        backgroundColor: "#202020",
        color: "#909090",
        margin: "15px", 
        padding: "20px"
    }
}



function Projects() {
  return (
    <div>
        <h2 style={{color: "white", textAlign: "center"}}>Projects</h2>
        <div>
            <h3 style={style.heading}>Data Analysis</h3>
            <Card style={style.card}>
                <img style={style.image} src={houseSales}></img>
                    <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                        Using psycopg2 retrieved data from SQL server, and ordered the data by dates. The x-axis is the number of homes sold monthly, and the y-axis corresponds with the month starting in Feb 2007 to 2018.<br /> <br />Server: PostgreSQL <br />Data: Kaggle(House Property Sales Time Series) <br /> Libraries: MatPlotLib, Psycopg2
                    </span>
                    <GithubOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "25%", marginTop: "5%" }}/>
                    <ProjectOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "37%", marginTop: "5%" }}/>
            </Card>
        </div>
            <div>
                <h3 style={style.heading}>Blockchain and Development</h3>
                <Card style={style.card}>
                    <span style={style.warning}>** In order to view entire project must have a compatible browser wallet. **</span>
                    <span style={style.warning}>** You can see full video walk-through <a href="https://youtu.be/MlUy0TSYOQg">Here</a> **</span>
                    <img style={style.image} src={gridlock}></img>
                        <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                            An application with the capabilities of displaying all information for different fungible tokens. Data is pulled directly from the blockchain, and various API's.<br /> <br />Server: Moralis <br />API: Moralis, Infura(RPCNODE) <br /> Packages: React, Moralis, Ant-Design, ChartJs
                        </span>
                        <a src="https://github.com/DEFIProtocol/lock" style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "33%", marginTop: "5%" }}>
                            <GithubOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right" }}>
                            </GithubOutlined>
                        </a>
                        <a src="./Projects/gridlock/src/App.jsx" style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "50%", marginTop: "5%" }}>
                            <ProjectOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right"}}/>
                        </a>
                </Card>
            <div>
                <Card style={style.card}>
                    <img style={style.image} src={DAO}></img>
                        <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                            An application capable of viewing top 10 crypto news, and all prices for 100 different cryptocurrencies.<br /> <br />Server: MongoDB <br />API: Rapid API <br /> Packages: React, Ant-Design, ChartJs
                        </span>
                        <a href="https://github.com/DEFIProtocol/StarterCryptoProject2" style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "33%", marginTop: "5%" }}>
                            <GithubOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right" }}>
                            </GithubOutlined>
                        </a>
                        <a href="./Projects/mother-teresa/client/src/App.js" style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right", marginLeft: "50%", marginTop: "5%" }}>
                        <ProjectOutlined style={{position: "absolute", color: "white", fontSize: "150%", width: "25%", float: "right"}}/>
                        </a>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Projects