import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from './components/pages/landing'
import Login from './components/pages/login'
import Signup from './components/pages/signup'
import Cart from './components/pages/cart'
import Profile from './components/pages/profile'
import AdminLogin from './components/pages/adminLogin'
import SellerLogin from './components/pages/sellerLogin'
import SellerSignup from './components/pages/sellerSignup'
import User from './components/pages/user'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}>
      </Route>
      <Route path='/login' element={<Login></Login>}>
      </Route>
      <Route path='/signup' element={<Signup></Signup>}>
      </Route>
      <Route path='/cart' element={<Cart></Cart>}>
      </Route>
      <Route path='/profile' element={<Profile></Profile>}>
      </Route>
      <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}>
      </Route>
      <Route path='/sellerlogin' element={<SellerLogin></SellerLogin>}>
      </Route>
      <Route path='/sellersignup' element={<SellerSignup></SellerSignup>}>
      </Route>
      <Route path='/user' element={<User></User>}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
