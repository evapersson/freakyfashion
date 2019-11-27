import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

const ColorPicker = () => {
  return (
    <>
      <h6>Välj färg</h6>
      <form action="">
        <input type="radio" name="color" value="vit" />
        <small>Vit</small>
        <input type="radio" name="color" value="svart" />
        <small>Svart</small>
        <input type="radio" name="color" value="lila" />
        <small>Lila</small>
      </form>
    </>
  );
}
export default ColorPicker