import Header from './header/Header.jsx'
import Footer from './footer/Footer'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import BlogDetial from './pages/blog/BlogDetial.jsx'

function App() {

  return (
    <>
     <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/blog-detail' element={<BlogDetial/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/portfolio' element={<PortfolioPage/>} />
     
       </Routes>
   
      <Footer/>
     
     </div>
    </>
  )
}

export default App
