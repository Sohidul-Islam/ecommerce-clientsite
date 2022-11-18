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
import Shipping from './components/Shipping/Shipping';
import ProductsProvider from './context/ProductsProvider';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';
import Home2 from './components/Home2/Home';
import Dashboard from './components/DashBoard/Dashboard';
import InventoryProducts from './components/InventoryProducts/InventoryProducts';
import InventoryOrder from './components/InventoryOrder/InventoryOrder';
function App() {
  return (
    <ProductsProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home2></Home2>}>
              {/* <Route exact path="/" element={<Home></Home>}> */}
            </Route>
            <Route path="/shop" element={<Shop></Shop>}>
            </Route>
            <Route path="/order-review" element={<OrderReview></OrderReview>}>
            </Route>
            <Route path="/manage-inventory" element={<PrivateRouter><Inventory></Inventory></PrivateRouter>}>
              <Route path={``} element={<Dashboard />} />
              <Route path={`products`} element={<InventoryProducts />} />
              <Route path={`orders`} element={<InventoryOrder />} />
            </Route>
            <Route path="/my-orders" element={<PrivateRouter><Orders></Orders></PrivateRouter>}></Route>
            <Route path="/placeorder" element={<PrivateRouter>
              <PlaceOrder></PlaceOrder></PrivateRouter>
            }></Route>
            <Route path="/shipping" element={<PrivateRouter>
              <Shipping></Shipping>
            </PrivateRouter>
            }></Route>
            <Route path="/login" element={<Login></Login>}>
            </Route>
            <Route path="/register" element={<Register></Register>}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ProductsProvider>
  );
}
export default App;
