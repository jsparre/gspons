import React, {Component} from 'react';
import {
  Route,
  HashRouter,
  NavLink
} from "react-router-dom";
import About from './components/About';
import Contacts from './components/Contacts';
import Dominik from './components/Dominik';
import Home from './components/Home';
import Julia from './components/Julia';
import Photos from './components/Photos';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <HashRouter>
          <div className="navbar justify-content-end"> 
            <div class="btn-group">
              <NavLink className="btn btn-secondary" to="/about">About</NavLink>
              <div class="dropdown show">
                <button class="btn btn-secondary dropdown-toggle" href="/dominik" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dominik Gausa
                </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <NavLink className="dropdown-item" to="#">Action</NavLink>
                  <NavLink className="dropdown-item" to="#">Another action</NavLink>
                  <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                </div>
              </div>
            
              <div class="dropdown show">
                <button class="btn btn-secondary dropdown-toggle" href="/julia" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Julia Sparre
                </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <NavLink className="dropdown-item" to="#">Action</NavLink>
                  <NavLink className="dropdown-item" to="#">Another action</NavLink>
                  <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                </div>
              </div>
              <NavLink className="btn btn-secondary" to="/contacts">Contact</NavLink>
              <NavLink className="btn btn-secondary" to="/photos">Photos</NavLink>
            </div>
          </div>
        
          <Route exact path="/" component={Home} />
          <Route path="/dominik" component={Dominik} />
          <Route path="/julia" component={Julia} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/photos" component={Photos} />
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
