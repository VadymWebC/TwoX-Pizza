import { useState } from 'react';
import s from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import { pizza } from './pizza';

function App() {
  const [data, setData] = useState(pizza)
  const [cart, setCart] = useState([])

  return (
    <div className={s.container}>
      <Header cart={cart} />
      <Content
        data={data}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
