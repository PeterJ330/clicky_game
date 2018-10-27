import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import bugsBunny from "../images/bugsBunny.jpeg";

export const Photo = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />          
        </Col>
        <Col size="xs-8 sm-9">
        </Col>
      </Row>
    </Container>
  </li>
);
