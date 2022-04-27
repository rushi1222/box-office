import {Routes,Route,NavLink} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import GenericNotFound from './components/GenericNotFound';
import { Navigate } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import Show from './Pages/Show';
 function App() {
  return (
  

    <div>

    
    <Routes>
 
      <Route  path = "/" element = {<Home/>}></Route>
      <Route  path = "/Starred" element = {<Starred/>}></Route>
      <Route path = "/GenericNotFound" element = {<GenericNotFound/>}></Route>
      <Route path = "/Show/:id" element = {<Show/>}></Route>
      <Route path="*" element={<Navigate to="/GenereicNotFound" replace />} />
     
    
    </Routes>
    </div>
    

    
  );
}

export default App;
