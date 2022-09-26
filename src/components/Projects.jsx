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
        float: "left",
        marginTop: "3%"
    },
    warning: {
        color: "red",
        margin: "0px auto",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#202020",
        color: "#909090",
        margin: "15px", 
        padding: "20px",
        display: "flex",
        flexWrapper: "nowrap",
        
    }
}



function Projects() {
    

  return (
    <div>
        <h2 style={{color: "white", textAlign: "center"}}>Projects</h2>
        <h3 style={style.heading}>Node and Blockchain Development</h3>
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
                        <a href="https://crypto-starter-project.netlify.app/" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%"}}>
                        <ProjectOutlined style={{position: "absolute", color: "white", fontSize: "150%"}}/>
                        </a>
                        <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                            An application capable of tracking all the crypto prices from RapidApi. Additionally, used bing news to track top 10 trending crypto articles. On the Homepage it tells you information about the crypto market, top 10 cryptocurrencies, and the top 6 news articles. Each section has a further link to display more cryptos or news. Each coin or token has its own page with information pulled directly off of rapidAPI. I did add a basic user login as well using JWT and axios, but due to the nature of MongoDB don't have it set up on display site.<br /> <br />Server: MongoDB <br />API: Rapid API <br /> Packages: React, Ant-Design, ChartJs
                        </span>
                </Card>
            </div>
            <div>
                <Card style={style.card}>
                    <span style={style.warning}>
                    ** In order to view entire project must have a compatible browser wallet. ** <br />
                    </span>
                    <span style={style.warning}>
                    ** You can see full video walk-through <a href="https://youtu.be/MlUy0TSYOQg" style={{color: "lime", textDecoration: "none", marginLeft: "4px"}}> Here</a> **
                    </span>
                    <Image
                publicId={"ptphqpxirxjdwdx0apgc"}
                cloudName="gridlock"
                style={style.image}
                />
                    <a href="https://github.com/DEFIProtocol/Deployed-Lock" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "15%"}}>
                        <GithubOutlined style={{position: "relative", color: "white", fontSize: "150%"}}>
                        </GithubOutlined>
                    </a>
                    <a href="https://beta-gridlock.netlify.app/" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%"}}>
                        <ProjectOutlined style={{position: "relative", color: "white", fontSize: "150%"}}/>
                    </a>
                    <span style={{float: "right", width: "60%", marginTop: "10%"}}>
                        This site originally began as a form of minimum viable product. It was built of the ethereum-boilerplate template and has had almost 5 months of updates. These include a favorites list for different tokens that are dynamically added or removed from the user object in the database. A token webpage with price chart(not currently available due to to many api request to server), a description, website, token type, and announcements(all can be altered by the user wallet that matches the creator of token). To see full site capabilities please view my youtube walk-through listed above.<br /> <br />Server: Moralis <br />API: Moralis, Infura(RPCNODE), 1Inch <br /> Packages: React, Moralis, Ant-Design, ChartJs
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
                    <a href="https://github.com/DEFIProtocol/House-Property-Sales" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "15%"}}>
                        <GithubOutlined style={{position: "relative", color: "white", fontSize: "150%"}}>
                        </GithubOutlined>
                    </a>
                    <a href="https://github.com/DEFIProtocol/House-Property-Sales" style={{position: "absolute", color: "white", fontSize: "150%" , marginLeft: "30%" }}>
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