import "./IntroBox.css"
import guyPenLaptop from "../../Assests/Images/guyPenLaptop.png"
import GetStartedArrow from "../../Assests/Images/GetStartedArrow.png"

import React from 'react'

export default function IntroBox() {
  return (
    <div class="intro-box">
        <div class="short-about-content">
            <p id="introBoxTitle">We offer modern solutions <br/>
                for growing your business</p>

            <p id="introBoxSubTitle">We are a team of talented designers making websites</p>

            <button id="getStartedButton"><p id="GetStarted">Get Started</p> <img src={GetStartedArrow} alt="" id="rightArrow"/></button>
        </div>

        <img src={guyPenLaptop} alt="" id="guyPenLaptop"/>
    </div>
  )
}
