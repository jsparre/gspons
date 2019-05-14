import React, {Component} from 'react';
import {
  Route,
  HashRouter,
} from "react-router-dom";
import About from './components/About';
import Contacts from './components/Contacts';
import Dominik from './components/Dominik';
import Home from './components/Home';
import Julia from './components/Julia';
import Photos from './components/Photos';
import Top from './components/Top';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <HashRouter>
          <Top />
        
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
