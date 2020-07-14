import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Div, Button, Text, Row, Col } from 'atomize';

import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  let { id } = useParams();

  const {
    fetchProductWithId,
    product,
    addItemToCheckout,
    openCart
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
  }, [fetchProductWithId, id]);

  if (!product.title) return <div>Loading product...</div>;
  return (
    <Container>
      <Row>
        <Col>
          <Div
            bgImg={product.images[0].src}
            shadow="3"
            bgSize="contain"
            bgRepeat="no-repeat"
            w="100%"
            bgPos="center center"
            h="40rem"
          />
        </Col>

        <Col>
          <Text
            tag="h1"
            textColor="black500"
            textWeight="300"
            m={{ y: '2rem' }}
          >
            {product.title}
          </Text>
          <Text tag="h3" m={{ y: '2rem' }} textWeight="200">
            KES {product.variants[0].price}
          </Text>
          <Text
            tag="p"
            textSize="paragraph"
            textColor="gray900"
            textWeight="200"
          >
            {product.description}
          </Text>
          <Button
            rounded="0"
            shadow="3"
            bg="black500"
            m={{ y: '2rem' }}
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
              openCart();
            }}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
