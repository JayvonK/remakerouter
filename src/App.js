import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './Components/Pages/HomePageComponent';
import PageOneComponent from './Components/Pages/PageOneComponent';
import PageTwoComponent from './Components/Pages/PageTwoComponent';
import PageThreeComponent from './Components/Pages/PageThreeComponent';
import PageFourComponent from './Components/Pages/PageFourComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePageComponent />}/>
          <Route path='/pageOne' element={<PageOneComponent />}/>
          <Route path='/pageTwo' element={<PageTwoComponent />}/>
          <Route path='/pageThree' element={<PageThreeComponent />}/>
          <Route path='/pageFour' element={<PageFourComponent />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
