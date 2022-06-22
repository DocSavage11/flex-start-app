import './WhoWeAreContentContainer.css'
import Asians from '../../Assests/Images/Asians.jpg'
import RightArrowIcon from '../../Assests/Icons/RightArrowIcon.png'

import React from 'react'

export default function WhoWeAreContentContainer () {
  return (
    <div class="whoWeAreContentContainer">
    <div class="whoWeAreInformationBox">
        <p id="tinyTitle">WHO WE ARE</p>

        <p id="largeTitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, numquam consectetur. Esse consequatur.</p>

        <p id="whoWeAredescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores commodi quidem dolorum assumenda nulla enim, vero veniam, soluta itaque sint facere harum! Praesentium.</p>

        <button id="getStartedButton"><p id="GetStarted">Read More</p> <img src={RightArrowIcon} alt="" id="rightArrow"/></button>
    </div>

    <img src={Asians} alt="" id="asians"/>
</div>

  )
}
