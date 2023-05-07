import logo from './logo.svg';
import './App.css';
import HomePage from './components/home';
import NavBar from './components/nav';
import BottomBar from './components/bottom'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
