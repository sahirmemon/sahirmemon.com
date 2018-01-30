import React from "react";
import Helmet from "react-helmet";
import emergence from 'emergence.js'

import Header from '../components/Header/Header';
import config from "../../data/SiteConfig";

import './index.scss';

export default class MainLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          id: '2',
          title: 'Projects',
          path: '/projects',
          category: 'project'
        },
        {
          id: '3',
          title: 'Videography',
          path: '/videography',
          category: 'videography'
        },
        {
          id: '4',
          title: 'About',
          path: '/about',
          category: 'about'
        }
      ]
    }
  }

  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }

  render() {
    const { children, location } = this.props;
    const { pages } = this.state;
    const locationPath = location.pathname;
    const page = pages.filter(page => page.path === locationPath)[0];
    return (
      <div>
        <Helmet>
          <title>{ page && page.title ? `${page.title} | ${config.siteTitle}` : config.siteTitle }</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header location={locationPath} pages={pages} siteTitle={config.siteTitle} />
        {children()}
      </div>
    );
  }
}
