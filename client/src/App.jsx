import { useState } from 'react'

import './App.css'
import { Suspense,lazy } from 'react'
const Home = lazy(()=>import('./pages/Home.jsx'))
const NewsForm = lazy(()=>import('./components/NewsForm.jsx'))
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Suspense fallback={<div className='text-2xl'>Loading...</div>}>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/verify' element={<NewsForm/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>

    </>
  )
}

export default App
