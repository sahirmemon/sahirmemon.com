import React from 'react';
import Link from 'gatsby-link';

import bind from '../../shared/decorators/bind';

import './navigation.scss';

export default class Navigation extends React.Component {

  @bind
  setClassNames(link, location) {
    const base = 'menu-item';
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position) { // eslint-disable-line
        position = position || 0;
        return this.indexOf(searchString, position) === position;
      };
    }
    if (location.startsWith(link)) {
      return `${base} active`;
    }
    return base;
  }

  render() {
    const { className, location, pages, onMenuToggle, ...props } = this.props;
    return (
      <nav className={`page-nav ${className}`} {...props}>
        <ul className='menu'>
          <li>
            <Link to='/' className='menu-item' activeClassName='active' onClick={() => onMenuToggle('collapse')}>
              Home
            </Link>
          </li>
          {pages.map(page =>
            <li key={page.category}>
              <Link to={page.path} className={this.setClassNames(page.path, location)} activeClassName='active'>
                {page.title}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
