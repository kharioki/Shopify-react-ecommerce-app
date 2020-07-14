import React, { useContext } from 'react';
import {
  Container,
  Div,
  SideDrawer,
  Text,
  Row,
  Col,
  Icon,
  Anchor,
  Button
} from 'atomize';

import { ShopContext } from '../context/shopContext';

const Cart = () => {
  const { closeCart, isCartOpen, checkout } = useContext(ShopContext);

  if (!checkout.lineItems)
    return (
      <Text
        tag="h1"
        textColor="black500"
        textSize="paragraph"
        hoverTextColor="black700"
        transition="0.3s"
      >
        Cart Is Empty
      </Text>
    );

  if (checkout.lineItems) {
    return (
      <SideDrawer isOpen={isCartOpen} onClose={() => closeCart()}>
        <Container d="flex" flexDir="column" h="100%">
          <Row
            justify="space-between"
            border={{ b: '1px solid' }}
            p="0.7rem"
            borderColor="gray300"
          >
            <Text
              tag="h1"
              textColor="black500"
              textSize="paragraph"
              hoverTextColor="black700"
              transition="0.3s"
            >
              Cart
            </Text>
            <Anchor onClick={() => closeCart()}>
              <Icon name="Cross" color="black500" />
            </Anchor>
          </Row>

          <Row
            flexGrow="2"
            p="0.7rem"
            overflow="auto"
            flexWrap="nowrap"
            flexDir="column"
          >
            {checkout.lineItems.length < 1 ? (
              <Row>
                <Col>
                  <Text
                    tag="h1"
                    textColor="black500"
                    textSize="paragraph"
                    hoverTextColor="black700"
                    transition="0.3s"
                  >
                    Cart Is Empty
                  </Text>
                </Col>
              </Row>
            ) : (
              <>
                {checkout.lineItems &&
                  checkout.lineItems.map(item => (
                    <Row key={item.id} p={{ t: '5px' }}>
                      <Col>
                        <Div
                          bgImg={item.variant.image.src}
                          bgSize="contain"
                          bgRepeat="no-repeat"
                          bgPos="center"
                          h="5rem"
                          w="4rem"
                        />
                      </Col>
                      <Col>
                        <Text>{item.title}</Text>
                        <Text
                          tag="p"
                          textSize="paragraph"
                          textColor="black500"
                          textWeight="300"
                        >
                          {item.quantity}
                        </Text>
                      </Col>
                      <Col>
                        <Text
                          tag="p"
                          textSize="paragraph"
                          textColor="black700"
                          textWeight="400"
                        >
                          {item.variant.price}
                        </Text>
                      </Col>
                    </Row>
                  ))}
              </>
            )}
          </Row>

          <Row border={{ t: '1px solid' }} p="0.7rem" borderColor="gray300">
            <Anchor
              w="100%"
              href={checkout.webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                w="100%"
                rounded="0"
                bg="black500"
                shadow="2"
                hoverShadow="3"
                m={{ t: '1rem' }}
              >
                Checkout
              </Button>
            </Anchor>
          </Row>
        </Container>
      </SideDrawer>
    );
  }
};

export default Cart;
