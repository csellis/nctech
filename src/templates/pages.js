import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/pageLayout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
