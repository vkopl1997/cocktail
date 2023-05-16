import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import './about.css'

export const About = () => {
  return (
    <div className='about-main-wrapper'>
      <div className="heading">
        <h3>about us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem distinctio adipisci quae? Possimus rem natus itaque!?</p>
      </div>
      <div className="containerContainer">
        <section className='aboutAbout'>
          <div className="aboutIimage">
            <div className="imgImg"></div>
          </div>
          <div className="about-content">
            <h3>warm embrace in your cup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia at, dignissimos et eos amet, qui deserunt ipsa sapiente quisquam nisi adipisci in aliquid, voluptas iure. Quam temporibus eveniet amet?</p>
            <Link to='/'>
            <div class="ringbtn">
              <Button/>
            </div>
            </Link>
          </div>

        </section>
      </div>
    </div>
  )
}
