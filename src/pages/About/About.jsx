import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Explore</h2>
            <p className='fs-17'> Explore, is an ebook website that caters to readers of all age groups. 
            It offers a diverse range of genres, including religious literature, magazines, and children's books.
             One of the key features of Explore is the ability for users to review books. 
             In addition, Explore offers various premium plans that users can select, granting them premium user status and unlocking exclusive features. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
