import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manager from './Manager';
import Login from './Login';
import Register from './Register';
// dbuibqufeiofeb
//ebuib3e
const App = () => {
  return (
    <div className='paths'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      </Router>
    </div>
  );
};


export default App;
