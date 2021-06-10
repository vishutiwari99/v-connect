import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectStyle } from "react-toastify/dist/inject-style";
import './App.css';
import Notify from './components/notify/Notify';
import { ToastContainer } from 'react-toastify'

import PageRender from './customRouter/PageRender';
import Home from './pages/home';

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {

  return (
    <Router>
      <ToastContainer />
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
