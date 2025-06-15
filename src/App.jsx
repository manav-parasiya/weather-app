import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/home/Home';

function App() {
  return (
   <>
   <h1 className="text-3xl font-bold underline">test</h1>
     <Routes>
          <Route path='/home' element={<Home/>} />
      </Routes>
    <Link to="/home">Go to Home</Link>
   </>
  )
}

export default App
