import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link as RouterLink } from 'gatsby'

import SEO from './seo'
import Header from './header'

import '../app.scss'

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
    <div className="">
      <SEO />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="content">{children}</main>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
