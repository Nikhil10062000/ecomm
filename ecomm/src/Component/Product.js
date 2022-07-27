import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart } from "../redux/action";
import { remove } from "../redux/action";
import { product } from "../redux/productaction";
import { Row, Col, Card } from "react-bootstrap";
const Product = () => {
  const comment = useSelector((state) => state.productlist);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(product());
  }, []);
   
  return (
    <div className="mt-3">
      
      
      <Row xs={1} md={2} className="g-4">
        {comment.map((person, id) => (
          <Col key={id}>
            <Card>
              <Card.Img
                style={{ width: "300px", height: "300px" }}
                src={person.image}
                alt="product.jpg"
              />
              <Card.Body>
                <Card.Title>{person.title}</Card.Title>
                <Card.Text>Price : {person.price}</Card.Text>
                <Button
                  variant="success"
                  onClick={() => dispatch(addToCart(person))}
                >
                  ADD
                </Button>
                <hr />
                <Button
                  variant="danger"
                  onClick={() => dispatch(remove(person.id))}
                >
                  REMOVE
                </Button>
                <hr />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;
