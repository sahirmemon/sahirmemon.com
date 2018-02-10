import React from 'react';
import {Motion, spring} from 'react-motion';
import Link from 'gatsby-link';
import sortBy from 'lodash/sortBy';
import ReactSVG from 'react-svg';

import bind from '../../shared/decorators/bind';
import {constants} from '../../../data/SiteConfig';
import Icon from '../../shared/assets/icons';
import {Glyph} from '../../shared/assets/glyph';
import Navigation from '../Navigation/Navigation';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false
    };
  }

  @bind
  onMenuToggle(toggle) {
    const breakpoint = constants.breakpoint;
    if (window.innerWidth < breakpoint.md) {
      const scrollElement = document.getElementsByTagName('html')[0];
      if (toggle) {
        if (toggle === 'open') {
          this.setState({isMenuVisible: true});
          scrollElement.classList.add('menu-open');
        } else if (toggle === 'collapse') {
          this.setState({isMenuVisible: false});
          scrollElement.classList.remove('menu-open');
        }
      } else if (this.state.isMenuVisible) {
        this.setState({isMenuVisible: false});
        scrollElement.classList.remove('menu-open');
      } else {
        this.setState({isMenuVisible: true});
        scrollElement.classList.add('menu-open');
      }
    }

    document.activeElement.blur();
  }

  render() {
    const { location, pages, siteTitle } = this.props;

    const menuItems = sortBy(pages, page => page.id);

    let currentCategory = pages.filter(page => page.path === location)[0];
    let currentCategoryLink = null;
    if (currentCategory) {
      currentCategory = currentCategory.category;
      currentCategoryLink = menuItems.filter(
        page => page.category === currentCategory
      )[0];
    }

    return (
      <header className='page-header'>
        <div className='page-brand-wrapper'>
          <h1 className='page-brand-header'>
            <Link className='brand page-brand' to='/' onClick={() => this.onMenuToggle('collapse')}>
              <Icon glyph={Glyph.Logo} className='page-brand-logo'/>
              <span className='page-brand-text'>{siteTitle}</span>
            </Link>
            {currentCategory && !this.state.isMenuVisible && <Link className='page-brand page-brand-category' to={currentCategoryLink.path} onClick={() => this.onMenuToggle('collapse')}>
              <span className='page-brand-label'>
                {currentCategoryLink.title}
              </span>
            </Link>
            }
            {this.state.isMenuVisible && <span className='page-brand page-brand-category disabled'>
              <span className='page-brand-label'>Menu</span>
            </span>
            }
          </h1>
          <div className='page-brand-nav'>
            <Navigation className='desktop-menu' location={location} pages={menuItems} />
            <button className={`page-nav-toggle ${this.state.isMenuVisible
              ? 'opened'
              : 'closed'}`} type='button' onClick={() => this.onMenuToggle()}>
              <span className='close'>
                <span className='text'>Close</span>
                <Icon glyph={Glyph.Close}/>
              </span>
              <span className='open'>
                Menu
                <Icon glyph={Glyph.Menu}/>
              </span>
            </button>
          </div>
        </div>
        <Motion style={{
          x: spring(this.state.isMenuVisible
            ? 1
            : 0, {
            stiffness: 300,
            damping: 30
          })
        }}>
          {({x}) => <div className='page-nav-overlay' style={{
            display: x === 0
              ? 'none'
              : 'block',
            opacity: x
          }}/>}
        </Motion>

        <Motion style={{
          x: spring(this.state.isMenuVisible
            ? 0
            : -100, {
            stiffness: 300,
            damping: 30
          })
        }}>
          {({x}) => <Navigation className={this.state.isMenuVisible
            ? 'page-nav-open'
            : ''} location={location} pages={menuItems} onMenuToggle={this.onMenuToggle} style={{
            display: x === -100
              ? 'none'
              : 'block',
            WebkitTransform: `translate(0, ${x}%)`,
            transform: `translate(0, ${x}%)`
          }}/>}
        </Motion>
      </header>
    );
  }
}
