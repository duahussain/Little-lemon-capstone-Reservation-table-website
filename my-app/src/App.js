import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div>
      <Nav/>
        <Main/>
        <Menu/>
        <Footer/>
    </div>
  );
}

export default App;
