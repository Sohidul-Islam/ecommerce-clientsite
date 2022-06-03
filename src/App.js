
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shop></Shop>}>

          </Route>
          <Route path="/shop" element={<Shop></Shop>}>

          </Route>
          <Route path="/order-review" element={<OrderReview></OrderReview>}>

          </Route>
          <Route path="/manage-inventory" element={<Inventory></Inventory>}>

          </Route>
          <Route path="*" element={<NotFound />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
