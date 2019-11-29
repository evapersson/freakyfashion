import React from 'react'
import { Row } from 'react-bootstrap'

const SizePicker = () =>{
  return (
    <>
    <h6 className="mt-3 mr-3">Välj storlek</h6>
    <select>
      <option>Välj storlek</option>
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">S</option>
    </select>
 </>
  );
}
export default SizePicker