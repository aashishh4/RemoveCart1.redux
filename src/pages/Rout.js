import {  Routes, Route  } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart'
import Navbar from './Navbar';

function Rout(){

    return(
        <div>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        
        </Routes>
        </div>
    )
}export default Rout