import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import Art from './components/Art';

import NavBar from './components/NavBar';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route component={Home} path='/' exact></Route>
          <Route component={About} path='/about'></Route>
          <Route component={SinglePost} path='/post/:slug'></Route>
          <Route component={Post} path='/post'></Route>
          <Route component={Project} path='/project'></Route>
          <Route component={Art} path='/Art'></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
