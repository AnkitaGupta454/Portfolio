import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import home1 from './../../assets/home_black.png';
import home2 from './../../assets/home_white.png';
import './GoHome.css'

class GoHome extends Component{
 NavigateToHome=()=>{
     const {history} =this.props;
      history.push('/');
 }

    render(){
        const {location} = this.props;
        const whitebtn = location.pathname === '/';
        return(
            <button
            className={`go-home-btn ${
                whitebtn ? 'white-bkg' :'gradient-bkg'
            }`}
               onClick={this.NavigateToHome}
            >
               <img
                className="home-icon"
                src={whitebtn ?home1 : home2}
                alt="gohome"
               />
            </button>
        )
    }
}

export default withRouter(GoHome);