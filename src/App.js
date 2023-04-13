import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/signup/Signup';
import Signin from './components/pages/signin/Signin';
import Home from './components/pages/Home/Home';
import NoPage from './components/pages/NoPage';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/body' element={<Body/>}/>
      <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
