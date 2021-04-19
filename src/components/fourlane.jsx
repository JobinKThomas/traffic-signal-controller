import React, { Component } from 'react';
import Countdown from 'react-countdown';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import '../App.css';
import { Link } from 'react-router-dom';

const Completionist = () => 
  <div>
    <Countdown date={Date.now() + 60000} renderer={renderer} />
  </div>;
const renderer = ({  minutes, seconds, completed }) => {
  let time = 45
  let t = 0
  let sec = (minutes*60)+seconds
  let seco = seconds-15

  if (completed) {
    return <Completionist />;
  } 

  else if(sec<=20 && sec>15) {    //Warning
    return (
      <div className="quodrant1">
        <div class="container">
          <div class="card img-fluid" >
            <img class="card-img-top" src="lane.jpg" alt="Card image" />
            <div class="card-img-overlay">
              <button  className="btn btn-dark btn-sm m-2">
                <div className="warning">
                  <h4 class="card-title"> 
                    {minutes}:{seco}
                  </h4>
                  <p class="card-text">
                    <button className="dark"/>
                    <button className="warn"/>
                    <button className="dark"/>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  else if(sec<=59 && sec>15){          //Stop
    return (
      <div className="quodrant1">
        <div class="container">
          <div class="card img-fluid" >
            <img class="card-img-top" src="lane.jpg" alt="Card image" />
            <div class="card-img-overlay">
              <button  className="btn btn-dark btn-sm m-2">
                <div className="danger">
                  <h4 class="card-title"> 
                    {minutes}:{seco}
                  </h4>
                  <p class="card-text">
                    <button className="dang"/>
                    <button className="dark"/>
                    <button className="dark"/>
                  </p>
                </div>  
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  else if(sec>59){              //Stop
    return (
      <div className="quodrant1">
        <div class="container">
          <div class="card img-fluid" >
            <img class="card-img-top" src="lane.jpg" alt="Card image" />
            <div class="card-img-overlay">
              <button  className="btn btn-dark btn-sm m-2">
                <div className="danger">
                  <h4 class="card-title"> 
                    {t}:{time}
                  </h4>
                  <p class="card-text">
                    <button className="dang"/>
                    <button className="dark"/>
                    <button className="dark"/>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  else {                  //Go
    return(
      <div className="quodrant1">
        <div class="container">
          <div class="card img-fluid" >
            <img class="card-img-top" src="road.jpg" alt="Card image" />
            <div class="card-img-overlay">
              <button  className="btn btn-dark btn-sm m-2">
                <div className="success">
                  <h4 class="card-title"> 
                    {minutes}:{seconds}
                  </h4>
                  <p class="card-text">
                    <button className="btn btn-success btn-sm m-2">
                      <ArrowBackOutlinedIcon/>  
                    </button>
                    <button className="btn btn-success btn-sm m-2">
                      <ArrowUpwardOutlinedIcon/>  
                    </button>
                    <button className="btn btn-success btn-sm m-2">
                      <ArrowForwardOutlinedIcon/>
                    </button>
                  </p>
                </div>
              </button> 
            </div>
          </div>
        </div>
      </div>
    )
  }
};
    
class Four extends Component {
  render() { 
    function refreshPage() {
      window.location.reload(false);
    }
    return ( 
      <div>
        <h1 className="primary">Four Lane Traffic System</h1>            
        <button onClick={refreshPage} className="btn btn-danger btn-sm m-2">Click to Reset</button>
        <button className="btn btn-dark btn-sm m-2"> <Link to="/3lane">Control 3 Lane Traffic</Link></button>
        <h4>Lane 1</h4>
          <Countdown date={Date.now() + 15000} renderer={renderer} />
        <h4>Lane 2</h4>
          <Countdown date={Date.now() + 30000} renderer={renderer} />
        <h4>Lane 3</h4>
          <Countdown date={Date.now() + 45000} renderer={renderer} />
        <h4>Lane 4</h4>
          <Countdown date={Date.now() + 60000} renderer={renderer} />
      </div>
    );
  }
}
 
export default Four;
