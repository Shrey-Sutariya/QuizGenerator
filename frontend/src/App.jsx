import './App.css'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestDetails_Page from './Pages/TestDetails';
import Carousel from './Module/Carousel/Carousel';
import NewLandingPage from './Pages/NewLandingPage';
import Submit from './Pages/GiveTest';

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<NewLandingPage/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path='/TestDetails' element={<TestDetails_Page/>}/>
    <Route path="/GiveTest" element={<Submit/>}/>
    <Route path="/TestNavbar" element={<Carousel/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
