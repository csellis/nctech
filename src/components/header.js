import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav>
      <div className="logo">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="navigation"></div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
