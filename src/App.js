
//import Badge from 'react-bootstrap/Badge'
// import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Pic from './components/Pic';
localStorage.setItem('count',0);
function App() {
  return (
    <div>
 <AppBar />
 <Banner />
 <Menu />
 <Pic />
 <Contact />
</div>
  );
}

export default App;
