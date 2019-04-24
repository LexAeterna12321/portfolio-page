import { useState } from "react";
import "../styles.scss";
import Head from "next/head";
import Container from "../components/shared/Container";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";

const Index = () => {
  const [state, setState] = useState({ siteActive: "/" });
  const [loaderStatus, setLoaderStatus] = useState({ loader: true });

  if (loaderStatus.loader) {
    setTimeout(() => {
      setLoaderStatus({ loader: false });
    }, 1000);
  }

  const triggerSiteChange = site => {
    if (site === state.siteActive) return;
    const changer = document.querySelector(".site-change");
    const links = document.querySelectorAll(".nav__ul__li__a");
    const borders = document.querySelector(".container--inner");

    if (site !== "/") {
      borders.classList.add("container--inner__border");
    } else {
      borders.classList.remove("container--inner__border");
    }

    changer.classList.add("site-change--active");
    links.forEach(link => link.classList.add("nav__ul__li__a--disabled"));

    setTimeout(() => {
      setState({ ...state, siteActive: site });

      setTimeout(() => {
        changer.classList.remove("site-change--active");
        links.forEach(link =>
          link.classList.remove("nav__ul__li__a--disabled")
        );
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
        <meta
          name="description"
          content="My Portfolio Page. You can freely contact me via contact form"
        />
        <meta
          name="keywords"
          content="Rafał Cieślik, Cieślik Portfolio, Rafał Cieślik Portfolio Page"
        />
        <meta name="author" content="Rafał Cieślik" />
        <link rel="icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
      </Head>
      <Container siteChange={triggerSiteChange} loader={loaderStatus.loader}>
        {renderPage()}
        <div className="site-change" />
      </Container>
    </div>
  );

  return content;
};

export default Index;
