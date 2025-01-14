import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/index.css"
import WashUImage from "../../static/images/WashU.png";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="landing">
        <h1 className="title-L">Home</h1>
      </section>
      <section className="about">
        <div className="about-container">
          <div className="about-left">
            <img src={WashUImage} width="300"></img>
          </div>
          <div className ="about-right">
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="about-button">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <h1 className="title-L">Explore</h1>
      </section>
      <Footer />
    </>
  )
}
