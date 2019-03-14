import { useState } from "react";
import "../styles.scss";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Index = () => {
  const [state, setState] = useState({ siteActive: "/" });

  const triggerSiteChange = site => {
    if (site === state.siteActive) return;
    const changer = document.querySelector(".site-change");
    changer.classList.add("site-change--active");

    setTimeout(() => {
      setState({ ...state, siteActive: site });

      setTimeout(() => {
        changer.classList.remove("site-change--active");
      }, 750);
    }, 1000);
  };

  const renderPage = () => {
    switch (state.siteActive) {
      case "/":
        return <Home siteChange={triggerSiteChange} />;
      case "about":
        return <About siteChange={triggerSiteChange} />;
      case "portfolio":
        return <Portfolio siteChange={triggerSiteChange} />;
      case "contact":
        return <Contact siteChange={triggerSiteChange} />;
      default:
        return <Home siteChange={triggerSiteChange} />;
    }
  };

  const content = (
    <div>
      <Head>
        <title>Rafał Cieślik Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
      </Head>
      <Container siteChange={triggerSiteChange}>
        {renderPage()}
        <div className="site-change" />
      </Container>
    </div>
  );

  return content;
};

export default Index;
