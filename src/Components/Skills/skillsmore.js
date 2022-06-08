import React from 'react'
import { Icon } from '../InfoSection/InfoElements'
const skillsmore = () => {
  return (
    <>
      <Icon to='/' style={{color: 'black'}}>Alexander</Icon>
      <p>skillsmore</p>
      <form  class="roble" action="">
            <label  for="tech" class="options">Choose a Category</label>
            <select id="skills2" class="tech">
                <option id="skills2" class="all" value="all" >All</option>
                <option id="skills2" class="all" value="front">Front end</option>
                <option id="skills2" class="all" value="back">Back end</option>
                <option id="skills2" class="all" value="others">Others</option>
            </select>   
        </form>
    </>
  )
}

export default skillsmore