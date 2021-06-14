import { BrowserRouter as Router, Route } from 'react-router-dom'
import { injectStyle } from "react-toastify/dist/inject-style";
import './App.css';
import { ToastContainer } from 'react-toastify'

import Alert from './components/notify/Alert';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';

import Home from './pages/home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header/Header';

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
      <div className="App">
        <input type="checkbox" hidden id="theme" />
        <div className="flex flex-col md:mx-36">
          {auth.token && <Header />}
          <Alert />
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
