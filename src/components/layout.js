import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import './layout.css'

const Layout = ({ children }) => (
  <div className="h-screen">
    <SEO />
    <div>
      <main>{children}</main>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
