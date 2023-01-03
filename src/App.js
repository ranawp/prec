import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} >  </Route>
      </Routes>
    </div>
  );
}

export default App;
