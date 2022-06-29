import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop></Shop>}>
          </Route>
          <Route path="/shop" element={<Shop></Shop>}>
          </Route>
          <Route path="/order-review" element={<OrderReview></OrderReview>}>
          </Route>
          <Route path="/manage-inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path="/login" element={<Login></Login>}>
          </Route>
          <Route path="/register" element={<Register></Register>}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
