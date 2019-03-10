import "../styles.scss";
import Head from "next/head";
import Container from "../components/Container";
import Home from "../components/Home";
import About from "../components/About";

class Index extends React.Component {
  state = { siteActive: "/" };

  siteChange = site => {
    this.triggerSiteChange(site);
  };

  triggerSiteChange = site => {
    if (site === this.state.siteActive) return;
    const changer = document.querySelector(".site-change");
    changer.classList.add("site-change--active");

    setTimeout(() => {
      this.setState({ siteActive: site });

      setTimeout(() => {
        changer.classList.remove("site-change--active");
      }, 1000);
    }, 1500);
  };

  renderPage = () => {
    switch (this.state.siteActive) {
      case "/":
        return <Home siteChange={this.siteChange} />;
      case "about":
        return <About siteChange={this.siteChange} />;
      default:
        return <Home siteChange={this.siteChange} />;
    }
  };
  render() {
    return (
      <div>
        <Head>
          <title>Rafał Cieślik Portfolio</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Container>
          {this.renderPage()}
          <div className="site-change" />
        </Container>
      </div>
    );
  }
}

export default Index;
