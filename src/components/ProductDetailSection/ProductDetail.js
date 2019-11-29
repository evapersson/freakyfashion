import React, {useState} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import SizePicker from '../ProductDetailSection/SizePicker'
import ColorPicker from '../ProductDetailSection/ColorPicker'
import ButtonComp from '../ProductDetailSection/ButtonComp'
import ButtonCompEng from '../ProductDetailSection/EnglishPDS/ButtonCompEng'
import ColorPickerEng from '../ProductDetailSection/EnglishPDS/ColorPickerEng'
import SizePickerEng from '../ProductDetailSection/EnglishPDS/SizePickerEng'

const ProductDetail = () => {

  const detailDataSve =  {title: "Produktnamn", articleNumber:"Artikelnummer: 164 - 000 - 000 - 000", description: "Detta är beskrivning av produkten", price: "Pris: 499 SEK"  };

  const detailDataEng = 
    { title: "Product name", articleNumber: "Article number: 164-000-000-000", description: "This is the translated version of the product description", price: "Price: 499 SEK"  };

  const [language, setLanguage] = useState(true);

  return (
    <Row className="align-items-start">
      <Col xs={12} md={6}>
        <Image
          src="https://via.placeholder.com/450x600"
          alt="image on a product"
        ></Image>
      </Col>
      <Col xs={12} md={6}>
        <button onClick={() => setLanguage(false)}>Translate</button>

        {language ? <div>
        <h3 className="text-left">{detailDataSve.title}</h3>
        <small> <p className="text-left">{detailDataSve.articleNumber}</p></small>
        <article className="mt-3 text-left">
          <p>{detailDataSve.description}</p> 
        </article>
        <h5 className="mt-3 text-left">{detailDataSve.price}</h5>

        <Col xs={12} md={6}>
          <Row>
          <ColorPicker />
          </Row>
          <Row>
        <SizePicker />
          </Row>
     </Col>
     <Col xs={12} md={6}>
        <Row className="align-item-start mt-3">
        <ButtonComp/>
        </Row>
        </Col>
        </div>
         :
          <div>
            <h3 className="text-left">{detailDataEng.title}</h3>
            <small> <p className="text-left">{detailDataEng.articleNumber}</p></small>
            <article className="mt-3 text-left">
              <p>{detailDataEng.description}</p>
            </article>
            <h5 className="mt-3 text-left">{detailDataEng.price}</h5>
            <Col xs={12} md={6}>
              <Row>
                <ColorPickerEng />
              </Row>
              <Row>
                <SizePickerEng />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="align-item-start mt-3">
                <ButtonCompEng />
              </Row>
            </Col>
          </div>}
      </Col>
    </Row>
  );
}

export default ProductDetail