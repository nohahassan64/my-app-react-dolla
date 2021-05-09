import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import './App.css';
import Home from './Pages';
import SingInPage from './Pages/singin';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/sing-in" component={SingInPage} /> 
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
