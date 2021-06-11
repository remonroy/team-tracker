import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import ErrorFile from './Component/ErrorFile/ErrorFile';
import About from './Component/About/About';
import { Card } from 'react-bootstrap';
import image from './Image/studieam.jpg';
import LeagueDetail from './Component/LeagueDetail/LeagueDetail';
function App() {
  const style={
    height:'200px',
  }
  return (
    
    <div className="App">
      
     <Router>
       <div>
            <Card>
                <Card.Img style={style} variant="top" src={image} />
                
            </Card>
       </div>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/id/:id">
          <LeagueDetail></LeagueDetail>
         </Route>
         <Route path="/about">
          <About></About>
         </Route>
         <Route path="*">
          <ErrorFile></ErrorFile>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
