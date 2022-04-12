import {Routes,Route,NavLink} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import GenereicNotFound from './Components/GenereicNotFound';
import { Navigate } from 'react-router-dom';
 function App() {
  return (
    <BrowserRouter>

    <Routes>
 
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/GenereicNotFound" element = {<GenereicNotFound/>}></Route>
      <Route path="*" element={<Navigate to="/GenereicNotFound" replace />} />
     
    
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
