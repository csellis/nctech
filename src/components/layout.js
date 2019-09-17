import React from 'react'
import PropTypes from 'prop-types'
import SEO from './seo'
import '../app.scss'

const Layout = ({ children }) => (
  <>
    <SEO />
    <div>
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
