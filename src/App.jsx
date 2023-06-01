
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
// importComponents
import Getstart from './components/Getstart';
import Document from './components/Document';
import Create from './components/create';
import Templates from './components/Templates';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Login from './components/login';
import Register from './components/register';
function App() {
  return (
 <>
 <HelmetProvider>
  <Routes>
    <Route path="/" element={<Getstart/>}></Route>
    <Route path="/Document" element={<Document/>}></Route>
    <Route path="/create" element={<Create/>}></Route>
    <Route path="/Templates" element={<Templates/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    <Route path="/Team" element={<Team/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Register" element={<Register/>}></Route>
  </Routes>
  </HelmetProvider>
 </>
  );
}
export default App;


{/*import React from 'react';
import Contract from './contract'

function App() {
  return (
    
 <>
 <Contract/>
 </>
  );
}
export default App;
*/}