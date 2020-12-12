import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import NavLinks from './nav-links'
import MenuButton from './menu-button'
import Sidebar from './sidebar'

import { mq } from '../styles'
import { useState } from 'react'
import Backdrop from './backdrop'

const StyledHeader = styled.header`
  position: relative;
  height: var(--navbar-height);

  width: 100%;
  max-width: ${mq.wide}px;
  padding: 1em 0.5em;

  background: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* max-width: 1200px; */

  .logo {
    right: 4px;
    a {
      h1 {
        /* letter-spacing: 2px; */
        font-weight: 900;
        font-size: 4.25rem;
        overflow-wrap: normal;
        color: var(--text-main);
        line-height: 1;
        text-align: left;
      }
    }
  }

  @media (min-width: ${mq.landscape}px) {
    padding: 3em 0.5em;
    .logo {
      margin: 0;
    }
  }
  @media (min-width: ${mq.tablet}px) {
    padding: 4em 0.5em;
  }
  @media (min-width: ${mq.desktop}px) {
    padding: 5em 0.5em;
  }
  @media (min-width: ${mq.wide}px) {
    padding: 6em 0.5em;
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <StyledHeader>
        <div className="logo">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {/* <img src={logo} alt="logo" /> */}
            <h1>Nayoun Kim</h1>
          </Link>
        </div>
        <MenuButton isOpen={isMenuOpen} handleClick={openMenu} />
        <NavLinks />
      </StyledHeader>
      <Backdrop show={isMenuOpen} close={closeMenu} />
      <Sidebar isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
