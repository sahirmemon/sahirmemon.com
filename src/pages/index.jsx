import React from "react";
import Helmet from "react-helmet";
import Hero from '../components/Hero/Hero';
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <div>
          <Hero />
        </div>
      </div>
    );
  }
}

export default Index;
