import React from 'react';
import { GithubOutlined, ProjectOutlined } from "@ant-design/icons";
import { Card } from 'antd';
import { Image } from "cloudinary-react";

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
        display: "flex",
        alignItems: "center",
    },
    projectDescription: {
    },
    warning: {
        color: "red",
        margin: "0px auto",
        padding: "5px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
    },
    linksAndDesc: {
        float: "right",
        position: "absolute",
    },
    card: {
        backgroundColor: "#202020",
        color: "#909090",
        margin: "15px", 
        padding: "20px",
        display: "flex",
        alignItems: "center",
        
    }
}



function Projects() {
    

  return (
    <div>
        <h2 style={{color: "white", textAlign: "center"}}>Projects</h2>
        <h3 style={style.heading}>Blockchain and Development</h3>
        <div>
                <Card style={style.card}>
                <Image
                publicId={"pqv9k3nohotekgv0gnyb"}
                cloudName="gridlock"
                style={style.image}
                />
                        <a href="https://github.com/DEFIProtocol/StarterCryptoProject2" style={{position: "absolute", color: "white", fontSize: "150%", marginLeft: "15%" }}>
                            <GithubOutlined style={{position: "absolute", color: "white", fontSize: "150%"}}>
                            </GithubOutlined>
                        </a>
                        <a href="./Projects/mother-teresa/client/src/App.js" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%"}}>
                        <ProjectOutlined style={{position: "absolute", color: "white", fontSize: "150%"}}/>
                        </a>
                        <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                            An application capable of viewing top 10 crypto news, and all prices for 100 different cryptocurrencies.<br /> <br />Server: MongoDB <br />API: Rapid API <br /> Packages: React, Ant-Design, ChartJs
                        </span>
                </Card>
            </div>
            <div>
                <Card style={style.card}>
                    <span style={style.warning}>** In order to view entire project must have a compatible browser wallet. ** <br />
                    ** You can see full video walk-through
                    <a href="https://youtu.be/MlUy0TSYOQg" style={{color: "lime", textDecoration: "none", display: "inline-block"}}>Here</a> **</span>
                    <Image
                publicId={"ptphqpxirxjdwdx0apgc"}
                cloudName="gridlock"
                style={style.image}
                />
                        <a src="https://github.com/DEFIProtocol/lock" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "15%"}}>
                            <GithubOutlined style={{position: "relative", color: "white", fontSize: "150%"}}>
                            </GithubOutlined>
                        </a>
                        <a src="" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%"}}>
                            <ProjectOutlined style={{position: "relative", color: "white", fontSize: "150%"}}/>
                        </a>
                        <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                            An application with the capabilities of displaying all information for different fungible tokens. Data is pulled directly from the blockchain, and various API's.<br /> <br />Server: Moralis <br />API: Moralis, Infura(RPCNODE) <br /> Packages: React, Moralis, Ant-Design, ChartJs
                        </span>
                </Card>
            <div>
            <h3 style={style.heading}>Data Analysis</h3>
            <Card style={style.card}>
                <Image
                publicId={"bnkbgytmv7r4dvgwm86s"}
                cloudName="gridlock"
                style={style.image}
                />
                    <a src="https://github.com/DEFIProtocol/House-Property-Sales" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "15%"}}>
                        <GithubOutlined style={{position: "relative", color: "white", fontSize: "150%"}}>
                        </GithubOutlined>
                    </a>
                    <a src="./Projects/gridlock/src/App.jsx" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%" }}>
                        <ProjectOutlined style={{position: "relative", color: "white", fontSize: "150%" }}/>
                    </a>
                    <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                        Using psycopg2 retrieved data from SQL server, and ordered the data by dates. The x-axis is the number of homes sold monthly, and the y-axis corresponds with the month starting in Feb 2007 to 2018.<br /> <br />Server: PostgreSQL <br />Data: Kaggle(House Property Sales Time Series) <br /> Libraries: MatPlotLib, Psycopg2
                    </span>
            </Card>
        </div>
        </div>
    </div>
  )
}

export default Projects