import React, {Component} from 'react';
import Logo from "../assets/img/placeholder_100.png";
import Navbar from './Navbar';

export default class Top extends Component{
    render(){
        return(
            <div className="flex-container">
                <div className="top justify-content-start">
                    <img src={Logo} alt="Logo placeholder"/> 
                </div>
                <div className="top">
                    <h1>GSpons</h1>
                </div>
                <Navbar />
            </div>
        );
    }
}