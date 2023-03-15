import React from 'react'
import AboutMe from "./AboutMe";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="dark:bg-dark">
        <div className="bg">
          <AboutMe />
          <Footer />
        </div>
    </div>
  )
}

export default Home