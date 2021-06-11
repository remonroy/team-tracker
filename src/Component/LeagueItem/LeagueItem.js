import React from 'react';
import { Card, Button} from 'react-bootstrap';
import './LeagueItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

const LeagueItem = ({league}) => {
    const {strLeague,idLeague,strLeagueAlternate,strSport}=league
    let history = useHistory();
    const handleClick=(id) => {
        history.push(`/id/${idLeague}`)
    }
    return (
        <div className="floting">
            <Card style={{ width: '18rem' }}>
                <Card variant="top" src="holder.js/100px180"  />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>This strSport: {strSport}</Card.Text>
                    <Button onClick={()=>handleClick(`/id/${idLeague}`)} variant="primary"><FontAwesomeIcon icon={faArrowRight} />Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueItem;