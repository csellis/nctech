import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Example from '../components/example'

const IndexPage = ({ data }) => {
  const latest = data.allMarkdownRemark.nodes[0].frontmatter.issue
  return (
    <Layout>
      <ContactForm className="flex-1 contactForm" latest={latest} />
      <Example />
    </Layout>
  )
}

export const query = graphql`
  query Latest {
    allMarkdownRemark(
      filter: { frontmatter: { issue: { gte: 1 } } }
      sort: { order: DESC, fields: frontmatter___issue }
      limit: 1
    ) {
      nodes {
        frontmatter {
          issue
        }
      }
    }
  }
`

export default IndexPage
