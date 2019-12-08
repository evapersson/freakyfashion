import React, { useState} from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

const ProductDetailFormEng = ({ colorPicker, sizePicker, quantityPicker }) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');

  // useEffect(() => {
  //   resetForm();
  // }, []);

  const resetForm = () => {
    setColor('');
    setSize('S');
    setQuantity('1');
  };
  function saveProduct () {
    NotificationManager.success(
      `The following is saved to your basket: ${quantity} qa, size: ${size} color: ${color}`
    )
    resetForm();
  };

  function buyProduct () {
    NotificationManager.success(
      `You have bought: ${quantity} qa, size: ${size} color: ${color}`
    )
    resetForm();
  };

  return (
    <>
      <form>
        <h6 className="text-left">Choose color</h6>
        {colorPicker.map(item => {
          return (
              <label key={item.id} className="mr-1">
              <input
                type="radio"
                value={item.colorEng}
                name={item.name}
                className="ml-2"
                onChange={event => setColor(event.target.value)}
              />
              {item.colorEng}</label>
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
              value={quantity}
              onChange={event => setQuantity(event.target.value)}
            >
              {quantityPicker.map (item => {
                return(
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
            variant="outline-primary"
            onClick={saveProduct}
          >
            Save
          </Button>

          <Button
          type="submit"
            className="mr-3 pl-3 pr-3 mt-4"
            variant="outline-success"
            onClick={buyProduct}
          >
            Buy
          </Button>
        </div>
      </form>
    </>
  );
};
export default ProductDetailFormEng;
