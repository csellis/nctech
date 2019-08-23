import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import Header from './header'
import { StoreContext, client } from '../context/StoreContext'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StoreContext.Provider value={{ client }}>
      <div className="h-screen">
        <SEO />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </StoreContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
