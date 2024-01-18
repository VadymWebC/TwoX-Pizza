import s from './App.module.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
