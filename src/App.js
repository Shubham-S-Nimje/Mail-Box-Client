import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Signup from './components/pages/signup/Signup';
import Signin from './components/pages/signin/Signin';
import Home from './components/pages/Home/Home';
import NoPage from './components/pages/NoPage';
import Viewmail from './components/pages/Home/Viewmail';

import './App.css';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/Mail-Box-Client' element={<Home />} />
          <Route path='/Mail-Box-Client/signin' element={<Signin />} />
          <Route path='/Mail-Box-Client/signup' element={<Signup />} />
          <Route path='/Mail-Box-Client/body' element={<Body />} />
          <Route path='/Mail-Box-Client/*' element={<Viewmail />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
