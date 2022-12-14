import { useState } from 'react';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import { CartProvider } from './store/CartProvider';



function App() {
  const [cartOpenStatus, setCartOpenStatus] = useState(false);

  const showCartHandler = () => {
      setCartOpenStatus(true);
  };
  const hideCartHandler = () => {
      setCartOpenStatus(false);
  };
  return (
    <CartProvider>
      {cartOpenStatus && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
