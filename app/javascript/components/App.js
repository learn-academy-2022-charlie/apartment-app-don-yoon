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
let [hasError, setErrors] = useState(false)

function readApartments () {
  fetch("/apartments")
  .then(request => request.json())
  .then(payload => setApartments(payload))
  .catch(err => console.log(err))
}
function createListing (newListing) {
  fetch("/apartments",
     {
       body: JSON.stringify(newListing),
       headers: {"Content-Type":"application/json"},
       method: "POST",   
     }
   )
   .then(response => response.json())
   .then(payload => setApartments(readApartments()))
   .catch(err => {
     setErrors(err)
     console.log(hasError)
   })
   alert("New listing added") 
 }
useEffect(() => {
  readApartments()
},[])


return (
        <Router>
          <Header {...props} readApartments={readApartments} apartments={apartments} />
          <div className='app-container'>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
              <Route path="/apartmentshow/:id" element={<ApartmentShow {...props}/>} />
              <Route path="/apartmentnew" element={<ApartmentNew {...props} apartments={apartments} createListing={createListing} readApartments={readApartments}/>} />
              <Route path="/apartmentedit/:id" element={<ApartmentEdit/>} />
              <Route element={<NotFound/>} />
            </Routes>
          </div>
          <Footer/>
        </Router>
    )
}