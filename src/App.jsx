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
import UserOrder from './components/pages/userOrders'
import Adminorder from './components/pages/adminOrders'
import SellerOrder from './components/pages/sellerOrder'
import SellerBook from './components/pages/sellerBooks'
import AdminBooks from './components/pages/adminBooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Addproduct from './components/cards/Addproduct'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
      <Route path='/admin' element={<AdminBooks></AdminBooks>}>
      </Route>
      <Route path='/seller' element={<SellerBook></SellerBook>}>
      </Route>
      <Route path='/userorders' element={<UserOrder></UserOrder>}>
      </Route>
      <Route path='/adminorders' element={<Adminorder></Adminorder>}>
      </Route>
      <Route path='/sellerorders' element={<SellerOrder></SellerOrder>}>
      </Route>
      <Route path='/sellerbooks' element={<SellerBook></SellerBook>}>
      </Route>
      <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
