import {Routes,Route,NavLink} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import GenereicNotFound from './Components/GenereicNotFound';
import { Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
 function App() {
  return (
    <BrowserRouter>

    <div>

    <Nav/>
    <Routes>
 
      <Route  path = "/" element = {<Home/>}></Route>
      <Route  path = "/Starred" element = {<Starred/>}></Route>
      <Route path = "/GenereicNotFound" element = {<GenereicNotFound/>}></Route>
      <Route path="*" element={<Navigate to="/GenereicNotFound" replace />} />
     
    
    </Routes>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
