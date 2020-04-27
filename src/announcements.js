import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";


function Anncouncements(props) {
  return (
    <Container>
      <Thoughts thoughts={props.thoughts} />
    </Container>
  );
}

Anncouncements.getProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/thoughts`);
  return {
    thoughts: await res.json()
  };
};

export default Anncouncements;