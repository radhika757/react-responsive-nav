import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    
        
    </div>
  );
}

export default App;
