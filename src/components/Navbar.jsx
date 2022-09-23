import { Menu, Button, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from "@ant-design/icons";
import '../App.css';

function Navbar() {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [screenSize, setScreenSize ] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();
    },[])

    useEffect (() => {
        if(screenSize < 760) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

  return (
    <div className = "nav-container">
        <div className = "logo-container">
            <Typography.Title level={2} className ="logo">
                Beau Allgood
            </Typography.Title>
            <Button className ="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
    {activeMenu && (
    <Menu theme = "dark">
        <Menu.Item key="about">
            <Link to ="/About" className="link">About</Link>
        </Menu.Item>
        <Menu.Item key="projects">
            <Link to ="/Projects" className="link">Projects</Link>
        </Menu.Item>
        <Menu.Item key="work">
            <Link to ="/Work" className="link">Work</Link>
        </Menu.Item>
        <Menu.Item key="contact">
            <Link to ="/Contact" className="link">Contact</Link>
        </Menu.Item>
    </Menu>
    )} 
    </div>
  )
}

export default Navbar