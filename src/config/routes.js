import  React from  'react';
import { Route, Link, Switch, BrowserRouter as Router} from  'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import Games from '../components/Game/Games'
import Gameinfo from '../components/Game/Gameinfo'



const  routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game/:id/:name" component={Gameinfo} />
            <Route path="/games" component={Games} />
            <Route path="/about" component={About} />
        
        </Switch>
    </Router>
)

export default routing;