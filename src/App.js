import './App.css';
import {BrowserRouter} from "react-router-dom"
import AppRouter from './components/Routers/AppRouter';

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
