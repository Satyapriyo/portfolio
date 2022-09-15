import React from 'react'
import AboutMe from "./AboutMe";
import Footer from "./Footer";
const Home = () => {
  return (
    <div classsName="dark:bg-slate-700">
        <div className="bg">
          <AboutMe />
          <Footer />
        </div>
    </div>
  )
}

export default Home