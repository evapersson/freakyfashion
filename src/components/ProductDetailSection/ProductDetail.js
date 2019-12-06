import React, {useState} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
// import SizePicker from '../ProductDetailSection/SizePicker'
// import ColorPicker from '../ProductDetailSection/ColorPicker'
// import ButtonComp from '../ProductDetailSection/ButtonComp'
import ProductDetailForm from './ProductDetailForm'
import ProductDetailFormEng from './ProdDetailENG/ProdDetailFormENG'

const ProductDetail = () => {

  const detailDataSve =  {title: "Produktnamn", articleNumber:"Artikelnummer: 164 - 000 - 000 - 000", description: "Detta är beskrivning av produkten", price: "Pris: 499 SEK"  };

  const detailDataEng = 
    { title: "Product name", articleNumber: "Article number: 164-000-000-000", description: "This is the translated version of the product description", price: "Price: 499 SEK"  };
  
  const formColor = [
    { id: 1, name: "color", color: "Vit", colorEng: "White"},
    { id: 2, name: "color", color: "Svart", colorEng: "Black" },
    { id: 3, name: "color", color: "Röd", colorEng: "Red"}
  ];

  const formSize = [
    { id: 1, name: "size", size: "XS" },
    { id: 2, name: "size", size: "S" },
    { id: 3, name: "size", size: "M" },
    { id: 4, name: "size", size: "L" },
  ]
  const formQuantity = [
    {id: 1, quan: 1, name: "quantity"},
    { id: 2, quan: 2, name: "quantity" },
    { id: 3, quan: 3, name: "quantity" },
    { id: 4, quan: 4, name: "quantity" }

  ]

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

        {language ? (
          <div>
            <h3 className="text-left">{detailDataSve.title}</h3>
            <small>
              {' '}
              <p className="text-left">{detailDataSve.articleNumber}</p>
            </small>
            <article className="mt-3 text-left">
              <p>{detailDataSve.description}</p>
            </article>
            <h5 className="mt-3 text-left mb-4">{detailDataSve.price}</h5>

            <Col xs={12} md={6}>
              <Row>
                <ProductDetailForm
                  colorPicker={formColor}
                  sizePicker={formSize}
                  quantityPicker={formQuantity}
                />
              </Row>
            </Col>
            {/* <Col xs={12} md={6}>

        </Col> */}
          </div>
        ) : (
          <div>
            <h3 className="text-left">{detailDataEng.title}</h3>
            <small>
              {' '}
              <p className="text-left">{detailDataEng.articleNumber}</p>
            </small>
            <article className="mt-3 text-left">
              <p>{detailDataEng.description}</p>
            </article>
            <h5 className="mt-3 text-left">{detailDataEng.price}</h5>
            <Col xs={12} md={6}>
              <Row className="align-item-start mt-3">
                <ProductDetailFormEng
                  colorPicker={formColor}
                  sizePicker={formSize}
                  quantityPicker={formQuantity}
                />
              </Row>
            </Col>
          </div>
        )}
      </Col>
    </Row>
  );
}

export default ProductDetail