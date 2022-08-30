import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useGetCryptosQuery } from './services/cryptoApi';

import News from './News'
import Cryptocurrencies from './Cryptocurrencies'

const { Title } = Typography;

const Homepage = (props) => {
  const history = useNavigate();
  const [user, setUser ] = useState(null);
  
  const getUser = async () => {
    const res = await axios.get('/vibranium', { 
      headers: { 
        Authorization: `Bearer ${localStorage.getItem("token")}`}
    });
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  },[])

  const logout = () => {
    localStorage.removeItem('token');
    history("/Login");
  };
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
console.log(data)
  if(isFetching) return 'Loading... ';

  if(!localStorage.getItem('token')){
      history("/login");
    }   

  
   return (
    <>
    <h3>Welcome! {user && user.name} </h3>
    <button className='logout' onClick={logout}>Logout</button>

    <Title level={2} className = "heading">Global Crypto Stats</Title>
      <Row>
        <Col span = {12}><Statistic title="Total Cryptocurrencies" value = {globalStats.total}/></Col>
        <Col span = {12}><Statistic title="Total Exchanges" value = {globalStats.totalExchanges}/></Col>
        <Col span = {12}><Statistic title="Total Market Cap" value = {millify(globalStats.totalMarketCap)}/></Col>
        <Col span = {12}><Statistic title="Total 24hr Volume" value = {millify(globalStats.total24hVolume)}/></Col>
        <Col span = {12}><Statistic title="Total Markets" value = {globalStats.totalMarkets}/></Col>
      </Row>

      <div className = "home-heading-container">
        <Title level = {2} className ="home-title">Cryptocurrencies</Title>
        <Title level = {2} className ="show-more"><Link to="/Cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;


