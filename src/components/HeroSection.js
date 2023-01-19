import React from 'react'
import '../assets/styles/style.css';
import circle from '../assets/circle.svg';
import star from '../assets/star.svg';
import pic from '../assets/picframe.svg'
import button from '../assets/Button.svg'

const HeroSection = () => {
  return (
    <div className="hero-section">
           <img  className="img"src={circle} alt="" />
           <h2>Choose a career in tech in </h2>
           <h2>minutes</h2>
           <div className="hero-content"> 
            <p>Personarise is your tech talent development platform for eliminating
                 time consuming activities while making decision on a tech career
                  you will succeed in — and so much more.
            </p>
           </div>

           <div className="users">
              <img src={pic} alt="" />

                <div className="star">
                    <p>3k+ users</p>
                    <img src={star} alt="" ></img>
                </div>
    
           </div>

           <img className="img-button" src={button} alt="" />

    </div>
  )
}

export default HeroSection