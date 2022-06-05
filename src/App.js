
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  console.log("Order: ", OrderReview);
  return (
    <div>
      <Header></Header>

      <BrowserRouter>
        <div className="navbar">
          <Link className="nav-link" to="/shop">Shop</Link>
          <Link className="nav-link" to="/order-review">Order Review</Link>
          <Link className="nav-link" to="/manage-inventory">Manage Inventory here</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Shop></Shop>}>

          </Route>
          <Route path="/shop" element={<Shop></Shop>}>

          </Route>
          <Route path="/order-review" element={<OrderReview></OrderReview>}>

          </Route>
          <Route path="/manage-inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}>

          </Route>
          <Route path="*" element={<NotFound />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
