import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectStyle } from "react-toastify/dist/inject-style";
import './App.css';


import { ToastContainer } from 'react-toastify'

import Alert from './components/alert/Alert';
import PageRender from './customRouter/PageRender';
import Home from './pages/home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import Login from './pages/login';



if (typeof window !== "undefined") {
  injectStyle();
}

function App() {

  const { auth } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <Router>
      <ToastContainer />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="max-w-2xl mx-auto">
          <Alert />
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
