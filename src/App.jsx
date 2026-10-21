/* ---------------------------------------------------------------------------
   src/App.jsx
   The page composition — this is the file to read first to understand the site.
   It simply stacks the sections in the order they appear on screen:

     Navbar      fixed pill navigation
     Hero        dark intro panel + stats
     Services    six-card service grid
     Advantage   why-choose-us block ("About" anchor)
     Process     five-step delivery timeline
     Faq         accordion
     Contact     details + enquiry form
     Footer      sitemap, contact info, legal bar
     BackToTop   floating scroll-to-top button

   Each section owns its own state; there is no global store, which keeps the
   front-end easy to hand over to the back-end team.
--------------------------------------------------------------------------- */
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Advantage from './components/Advantage.jsx'
import Process from './components/Process.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Advantage />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
