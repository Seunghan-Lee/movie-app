import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" exact={true} component={About} />
      <Route path='/movie/:title-:id' exact={true} component={Detail} />
    </BrowserRouter>
  )
}

export default App;