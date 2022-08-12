import './App.scss';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartProvider from './context/CartContext';
function App() {
  return (

<CartProvider>
  <BrowserRouter>     
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer /> }/>
      <Route path='/category/:categoryId' element={<ItemListContainer /> } />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Checkout/>} />
      <Route path='*' element={<h1>Error 404</h1>} />
    </Routes>
  </BrowserRouter>
</CartProvider>
  );
}

export default App;
