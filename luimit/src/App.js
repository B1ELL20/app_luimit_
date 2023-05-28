import './App.css';
import Capa from './components/Capa';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sobre from './components/Sobre';
import Footer from './components/Footer';
import Piscinas from './components/Piscinas';
import Reformas from './components/Reformas';

function App() {
  return (
    <Router>
      <Navbar/>
      <Capa />
      <Sobre />
      <Piscinas />
      <Reformas />
      <Footer />
    </Router>
  );
}

export default App;
