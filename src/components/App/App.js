import React from 'react'
import {HashRouter,Route} from 'react-router-dom'
import './App.css'
import Home from '../Home/Home'
import About from '../About/About'
import Project from '../Project/Project'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Navbar from '../Navbar/Navbar'
import GoHome from '../GoHome/GoHome'

export default function App() {

    return (
        <div>
           <HashRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about'exact component={About}/>
                    <Route path='/projects' exact component={Project}/>
                    <Route path='/skills' exact component={Skills}/>
                    <Route path='/contact' exact component={Contact}/>
                    <GoHome/>
                </div>
           </HashRouter>
        </div>
    )
}
