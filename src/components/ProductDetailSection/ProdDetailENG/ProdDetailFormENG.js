import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const ProductDetailFormEng = ({ colorPicker, sizePicker }) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');

  // useEffect(() => {
  //   resetForm();
  // }, []);

  // const resetForm = () => {
  //   setColor('');
  //   setSize('');
  //   setQuantity('1');
  // };

  return (
    <>
      <form>
        <h6 className="text-left">Choose color</h6>
        {colorPicker.map(item => {
          return (
            <>
              <input
                key={item.id}
                type="radio"
                value={item.colorEng}
                name={item.name}
                className="ml-2"
                onChange={event => setColor(event.target.value)}
              />
              <label className="mr-1">{item.colorEng}</label>
            </>
          );
        })}
        <Row>
          <Col xs={12} md={6}>
            <h6 className="text-left">Size</h6>
            <select
              value={size}
              onChange={event => setSize(event.target.value)}
            >
              {sizePicker.map(item => {
                return (
                  <option key={item.id} value={item.size} name={item.name}>
                    {item.size}
                  </option>
                );
              })}
            </select>
          </Col>
          <Col xs={12} md={6}>
            <h6>Quantity</h6>
            <select
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
            className="mr-3 pl-3 pr-3 mt-2"
            variant="outline-secondary"
            onClick={() =>
              NotificationManager.success(
                `The following is saved to your basket: ${quantity} qa, size: ${size} color: ${color}`
              )
            }
          >
            Save
          </Button>

          <Button
            className="mr-3 pl-3 pr-3 mt-2"
            variant="outline-secondary"
            onClick={() =>
              NotificationManager.success(
                `You have bought: ${quantity} qa, size: ${size} color: ${color}`
              )
            }
          >
            Buy
          </Button>
        </div>
      </form>
    </>
  );
};
export default ProductDetailFormEng;
