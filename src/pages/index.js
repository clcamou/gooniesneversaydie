import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Dashboard from "../components/Dashboard";


function Index(props) {
  return (
    <Container>
      <Dashboard thoughts={props.thoughts} />
    </Container>
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