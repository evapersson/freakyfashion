import React, {useState, useEffect} from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const ProductDetailForm = ({colorPicker, sizePicker}) => {

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] =useState("1");

  useEffect(()=> {
    resetForm();
  },[])

  const resetForm = () => {
    setColor("");
    setSize("");
    setQuantity("1")
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
              onChange={event => setQuantity(event.target.value)}
            >
              <option value="1" name="quantity">
                1
              </option>
              <option value="2" name="quantity">
                2
              </option>
              <option value="3" name="quantity">
                3
              </option>
              <option value="4" name="quantity">
                4
              </option>
            </select>
          </Col>
        </Row>

        <div>
          <Button
            className="mr-3 pl-3 pr-3 mt-4"
            variant="outline-secondary"
            onClick={() =>
              NotificationManager.success(
                `Du har sparat följande i din varukorg: ${quantity} st, storlek: ${size} färg: ${color}`
              )
            }
          >
            Spara
          </Button>

          <Button
            className="mr-3 pl-3 pr-3 mt-4"
            variant="outline-secondary"
            onClick={() =>
              NotificationManager.success(
                `Du har lagt följande i din varukorg: ${quantity} st, storlek: ${size} färg: ${color}`
              )
            }
          >
            Köp
          </Button>
        </div>
      </form>
    </>
  );
}
export default ProductDetailForm
