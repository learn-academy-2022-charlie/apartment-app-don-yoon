import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function App(props) {
let [apartments, setApartments] = useState([])

function readApartments () {
  fetch("/apartments")
  .then(request => request.json())
  .then(payload => setApartments({apartments: payload}))
  .catch(err => console.log(err))
}

useEffect(() => {
  readApartments()
},[])

return (
        <Router>
          <Header {...props} />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
              <Route path="/apartmentshow" element={<ApartmentShow/>} />
              <Route path="/apartmentnew" element={<ApartmentNew/>} />
              <Route path="/apartmentedit" element={<ApartmentEdit/>} />
              <Route element={<NotFound/>} />
            </Routes>
          <Footer/>
        </Router>
    )
}