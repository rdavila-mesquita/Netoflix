import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'
import Details from './pages/details/Details.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
