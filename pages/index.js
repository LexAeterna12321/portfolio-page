import "../styles.scss";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import Nav from "../components/Nav";
const Index = () => {
  return (
    <div>
      <Head>
        <title>Rafał Cieślik Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default Index;
