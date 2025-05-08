import Header from './header/Header.jsx'
import Footer from './footer/Footer'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router'


function App() {

  return (
    <>
     <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
     
       </Routes>
   
      <Footer/>
     
     </div>
    </>
  )
}

export default App
