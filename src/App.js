import './App.css';
import Demo from './pages/demo/Demo';
import { Login } from './pages/login/Login';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;

