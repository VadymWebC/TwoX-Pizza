import { useState } from 'react';
import s from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';
import { pizza } from './pizza';

function App() {
  const [data, setData] = useState(pizza)
  return (
    <div className={s.container}>
      <Header />
      <Content data={data} />
    </div>
  );
}

export default App;
