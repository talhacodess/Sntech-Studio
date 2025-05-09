import Header from './header/Header.jsx'
import Footer from './footer/Footer'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router'
import AboutUs from './pages/AboutUs.jsx'

function App() {

  return (
    <>
     <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
     
       </Routes>
   
      <Footer/>
     
     </div>
    </>
  )
}

export default App
