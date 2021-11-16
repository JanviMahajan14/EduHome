import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Discuss from "./components/screens/Discuss";

const Routing = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/discuss' element={<Discuss/>}/>
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
