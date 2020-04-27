import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";
import styled from "styled-components";

const styledContainer = styled(Container) `
   background: cadetblue;
`;

function Index(props) {
  return (
    <styledContainer>
      <Thoughts thoughts={props.thoughts} />
    </styledContainer>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(`${baseURL}/api/thoughts`);
  return {
    thoughts: await res.json()
  };
};

export default Index;