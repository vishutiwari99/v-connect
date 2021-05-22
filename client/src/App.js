import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Notify from './components/notify/Notify';
import PageRender from './customRouter/PageRender';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="max-w-2xl mx-auto">
          <Notify />

          <Route exact path="/" component={Home} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
