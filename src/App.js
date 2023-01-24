import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import { useEffect, useState } from 'react';
import PrivateRoute from './component/common/PrivateRoute';
import Users from './component/Users';
import Home from './component/Home';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import Footer from './component/common/Footer';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Dashboard />
            <Routes>

              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path="/" element={<Home />} />
                <Route path='/users' element={<Users />} />
              </Route>
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/signup" element={<Signup />} />

            </Routes>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </div >
  );
}

export default App;
