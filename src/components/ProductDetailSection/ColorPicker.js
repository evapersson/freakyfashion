import React from 'react'
import {Row} from 'react-bootstrap'

const ColorPicker = () => {
  return (
    <>
    
      <h6 className="mt-3 mr-3">Välj färg</h6>
      <form action="" className="form-check form-check-inline">
        <input type="radio" name="color" value="vit" id="white"/>
        <label class="form-check-label" for="white">
          Vit
   </label>
        <input className="ml-4" type="radio" name="color" value="svart" id="black"/>
        <label class="form-check-label" for="black">
          Svart
   </label>
        <input className="ml-4" type="radio" name="color" value="lila" id="purple" />
        <label class="form-check-label" for="purple">
          Lila
   </label>
      </form>
   
    </>
  );
}
export default ColorPicker