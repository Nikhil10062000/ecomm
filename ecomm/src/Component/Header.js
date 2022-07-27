import React from "react";
import { useSelector } from "react-redux";
import { Navbar,  Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  const result = useSelector((state) => state.cart);
  
  return (
    <>
      <Navbar className="navbar" >
        
   <Link to='/' >
    <h1 className="title">AVOX</h1>
        
   </Link>

        <Link to="/cart">
          <Button variant="dark"n className="btno">
            Cart
            <Badge bg="dark">{result.length}</Badge>
            
          </Button>
        </Link>

        
      </Navbar>
    </>
  );
};

export default Header;
