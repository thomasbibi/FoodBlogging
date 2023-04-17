import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Articles from './components/Articles'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner/>
    <AboutUs/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default App
