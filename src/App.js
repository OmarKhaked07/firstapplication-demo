import './App.css';
import MainPage from './components/MainPage';
import Element from './components/Element';
import { useGlobalContext } from './context';

function App() {

  const { main } = useGlobalContext()

  return (
    <div className="App">
      {main? <MainPage />: <Element/>}
    </div> 
  );
}

export default App;
