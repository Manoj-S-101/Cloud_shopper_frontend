 import './App.css'
 import Navbar from "./Components/Navbar/Navbar"
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Shop from './pages/Shop'
 import ShopCategory   from './pages/ShopCategory'
 import Cart from "./pages/Cart";
 import Login_signup from './pages/Login_signup'
 import Product from './pages/Product'
 import Footer from './Components/Footer/Footer'
 import men_banner from './Assets/banner_mens.png'
 import women_banner from './Assets/banner_women.png'
 import kids_banner from './Assets/banner_kids.png'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}/>
        <Route path='/kid' element={<ShopCategory banner={kids_banner }category="kid" />}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login-signup' element={<Login_signup/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </BrowserRouter> 
    </>
  )
}

export default App
