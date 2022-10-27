import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
            <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </UserProvider>
  );
}

export default App;
