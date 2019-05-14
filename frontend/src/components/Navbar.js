import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar justify-content-end"> 
                <div className="btn-group">
                    <NavLink className="btn btn-secondary" to="/about">About</NavLink>
                    <NavLink className="btn btn-secondary" to="/dominik">Dominik</NavLink>
                    <NavLink className="btn btn-secondary" to="/julia">Julia</NavLink>
                    <NavLink className="btn btn-secondary" to="/contacts">Contact</NavLink>
                    <NavLink className="btn btn-secondary" to="/photos">Photos</NavLink>
                </div>
            </div>
        );
    }
}
  