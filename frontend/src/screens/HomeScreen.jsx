import { Row,Col } from "react-bootstrap";
import products from "../products.js";
import plants from "../plants.js";

const HomeScreen = () => {
  return (
    <>
    <Row>
        {products.map(()=>(
            <Col sm={12} md={6}
        ))}
    </Row>
    </>
  )
}

export default HomeScreen