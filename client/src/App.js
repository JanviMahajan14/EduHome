import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Discuss from "./components/screens/Discuss";
import PostView from "./components/screens/PostView";
import CreateView from "./components/screens/CreateView";

const Routing = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/discuss' element={<Discuss/>}/>
      <Route exact path='/details' element={<PostView/>}/>
      <Route exact path='/createview' element={<CreateView/>}/>
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
