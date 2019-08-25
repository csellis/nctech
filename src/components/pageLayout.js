import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from './seo'
import Header from './header'
import { StoreContext, client } from '../context/StoreContext'
import './layout.css'

const PageLayout = ({ children }) => {
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <SEO />
        <div className="mx-4 container mx-auto">
          <main>{children}</main>
        </div>
      </div>
    </StoreContext.Provider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
