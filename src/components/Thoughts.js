import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Thought from "./Thought";
import styled from "styled-components";

const Wrapper = styled.section`
   background: cadetblue;
   color: seashell;
`
export default function Thoughts(props) {
  return (
    <Wrapper>
    <Row>
      <Col xs={12}>
        <h2>Announcements</h2>
      </Col>
      {props.thoughts &&
        props.thoughts.map(thought => (
          <Col key={thought._id} xs={12} sm={6} md={4} lg={3}>
            <Thought thought={thought} />
          </Col>
        ))}
      {!props.thoughts && <Col xs={12}>Loading...</Col>}
    </Row>
    </Wrapper>
  );
}