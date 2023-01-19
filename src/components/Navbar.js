import React from 'react'
import '../assets/styles/style.css';
import logo  from '../assets/logo.svg'
import playcircle from '../assets/play-circle.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo-container">
            <div className="logo">
                <img src={logo} alt="" />
                <p>Personarise</p>
            </div>

            <ul className="contact">
                <li>Who are we</li>
                <li>What we do</li>
                <li>Contact</li>
            </ul>

        </div>



        <div className="sign-up">
            <div className="demo">
                <img src={playcircle} alt="" />
                <p>Watch a demo</p>
            </div>

            <button>Sign Up</button>

        </div>

    </div>
  )
}

export default Navbar