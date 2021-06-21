import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import homeAnime from './../../assets/home_anime.gif'
import './Home.css'
import Typewriter from "typewriter-effect";

class Home extends Component{
    render(){
        return(
          <div className="home-conatiner">
              <div className="header-text">
                  <h1>Welcome to my Portfolio !</h1>
                  <p> This is Ankita !</p>
                  
              </div>
              <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ["Programming Lover", "Web Developer", "Computer Science Undergraduate Student"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <br/>
              <div className="head-btns">
                <Link to='/about' className="btn btn-white">
                    <p className="btn-text"> Know more about me.</p>
                </Link>
                <Link to='/contact' className="btn btn-transparent">
                    <p className="btn-text"> Connect with me.</p>
                </Link>
              </div>
              <div className="splash-image">
                 <img src={homeAnime} alt="home" className="home-anime"/>
              </div>
          </div>
        )
    }
}

export default Home;