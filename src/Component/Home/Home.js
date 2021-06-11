import React, { useEffect, useState } from 'react';
import image from '../../Image/studieam.jpg'
import { Card } from 'react-bootstrap';
import LeagueItem from '../LeagueItem/LeagueItem';
const Home = () => {
    
    const [league,setLeague]=useState([])
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeague(data.leagues.slice(0,200)))
    },[])
    return (
       
        <div>
            
            {
                league.map(lg=><LeagueItem key={lg.idLeague} league={lg}></LeagueItem>)
            }
        </div>
    );
};

export default Home;