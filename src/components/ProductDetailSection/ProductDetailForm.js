import React, {useState, useEffect} from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const ProductDetailForm = ({colorPicker, sizePicker, quantityPicker}) => {

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] =useState("");

  // useEffect(() => {
  //   resetForm();
  // }, []);

  const resetForm = () => {
    setColor("");
    setSize("");
    setQuantity("");
  };
  function saveProduct() {
    NotificationManager.success(
      `Du har sparat följande i din varukorg: ${quantity} st, storlek: ${size} färg: ${color}`
    )
    resetForm();
  }

  function buyProduct() {
    NotificationManager.success(
      `Du har köpt följande: ${quantity} st, storlek: ${size} färg: ${color}`
    )
    resetForm();
  }

  
  return (
    <>
      <form>
        <h6 className="text-left">Välj färg</h6>
        {colorPicker.map(item => {
          return (
            <>
              <input
                key={item.id}
                type="radio"
                value={item.color}
                name={item.name}
                className="ml-2"
                onChange={event => setColor(event.target.value)}
              />
              <label className="mr-1">{item.color}</label>
            </>
          );
        })}
        <Row>
          <Col xs={12} md={6}>
            <h6 className="text-left">Storlek</h6>
            <select
              className="justify-content-start"
              value={size}
              onChange={event => setSize(event.target.value)}
            >
              {sizePicker.map(item => {
                return (
                  <option
                    className="justify-content-start"
                    key={item.id}
                    value={item.size}
                    name={item.name}
                  >
                    {item.size}
                  </option>
                );
              })}
            </select>
            </Col>
            <Col xs={12} md={6}>
            <h6 className="text-left">Antal</h6>
            <select
              className="justify-content-start"
              type="number"
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
            >
              {quantityPicker.map(item => {
                return (
                  <option key={item.id} value={item.quan} name={item.name}>
                    {item.quan}
                  </option>
                )
              })}
            </select>
          </Col>
        </Row>

        <div>
          <Button
            className="mr-3 pl-3 pr-3 mt-4"
            variant="outline-secondary"
            onClick={saveProduct}
          >
            Spara
          </Button>

          <Button
            className="mr-3 pl-3 pr-3 mt-4"
            variant="outline-secondary"
            onClick={buyProduct}
          >
            Köp
          </Button>
        </div>
      </form>
    </>
  );
}
export default ProductDetailForm
