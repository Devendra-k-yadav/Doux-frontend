import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Started from '../components/Started.jsx'
import Team from '../components/Team'
import Pricing from '../components/Pricing'
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import About from '../components/About.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
  return (

    <section id="home" className="mx-auto">
      <div className="relative">
      <Navbar />
       <Header />
        </div>
       <Hero />
       <Features />
       <Stats />
       <Testimonials />
        <Started />
       <Team />
       <Pricing />
        <Clients />
       <Blog />
       <Contact />
        <About />
       <Footer />
   
    </section>
    
  )
}

export default Home