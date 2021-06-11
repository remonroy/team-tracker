import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from "react-router-dom";
import "./LeagueDetail.css";
import male from "../../Image/male.png";
import female from "../../Image/female.png";
import facebook from "../../Image/Facebook.png";
import twitter from "../../Image/Twitter.png";
import youtube from "../../Image/YouTube.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faFlag,faFutbol,faUserCircle} from '@fortawesome/free-solid-svg-icons';

const LeagueDetail = () => {
    let { id } = useParams();
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data.leagues[0]))
    },[])
    const {strDescriptionSE,strDescriptionFR,strLogo,strLeague,intFormedYear,dateFirstEvent,strCountry,strSport,strGender}=detail
    // if(detail.strGender==detail.strGender){
    //     lgo=<img src={image} alt=""/>
    // }else{
    //     lgo=<img src={femal} alt=""/>
    // }
    
    // <i class="fas faUserCircle"></i>
    return (
        <div className="body">
            <img className="imging" src={detail.strLogo} alt=""/>
            <div className="bodyArea">
                <div className="backGo">
                   
                    <div className="letSite">
                    <h3 className="">{strLeague}</h3>
                        <p className="one"><FontAwesomeIcon icon={faMapMarkerAlt} />Founded:{dateFirstEvent},{intFormedYear}</p>
                        <p className="two"><FontAwesomeIcon icon={faFlag} />Country:{strCountry}</p>
                        <p className="three"><FontAwesomeIcon icon={faFutbol} />Sport Type:{strSport}</p>
                        <p className="four"><FontAwesomeIcon icon={faUserCircle} />Gender:{strGender}</p>
                    </div>
                    <div className="rightSite">
                        {
                           strGender=== 'Male'? <img src={male} alt=""/>:<img src={female} alt=""/> 
                        }
                    </div>
                    
                    
                    
                </div>
                <br/>

                <p className="pra">{strDescriptionFR}</p>
                <br/>
                <br/>
                <br/>
                <p className="secondpra">{strDescriptionSE}</p>
            </div>
            <ul>
                <li><a href="https://www.google.com/"><img src={facebook} alt=""/></a></li>
                <li><a href="https://www.google.com/"><img src={twitter} alt=""/></a></li>
                <li><a href="https://www.google.com/"><img src={youtube} alt=""/></a></li>
            </ul>
        </div>
    );
};

export default LeagueDetail;