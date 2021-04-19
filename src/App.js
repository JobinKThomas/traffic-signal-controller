import './App.css';
import Three from './components/threelane'
import  Four from './components/fourlane'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Four}/>         //Redirect to FourLane 
        <Route path="/3lane" component={Three}/>        //Redirected to ThreeLane
      </Switch>
    </Router>
    </div>
  );
}
export default App;
