import React from 'react';
import { Card } from 'antd';

const style = {
    card: {
        margin: "15px",
        padding: "20px",
        backgroundColor: "#202020",
        marginBottom: "50px",
        height: "65vh"
    },
}

function Contact() {

  return (
    <>
    <h2 style={{color: "white", textAlign: "center"}}>Contact</h2>
    <Card style={style.card}>
        <h3>Email: Beau Allgood</h3>
        <h3>Phone Number: 402-218-3736</h3>
        <h3>LinkedIn: <a href="https://www.linkedin.com/in/beau-allgood-b67242181/">https://www.linkedin.com/in/beau-allgood-b67242181/</a></h3>
        <h3>Github: <a href="https://github.com/DEFIProtocol">DEFIProtocol</a></h3>
    </Card>
    </>
  )
}

export default Contact