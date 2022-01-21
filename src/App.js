import './App.css';
import { BrowserRouter } from "react-router-dom";
import Topo from './components/layout/Topo';
import Content from './components/layout/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topo></Topo>
        <Content />


      </BrowserRouter>

    </div>
  );
}

export default App;
