import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/pageLayout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.html }} />
        <iframe
            style={{ height: '667px', width: '375px' }}
            title="Iphone Preview"
            src={post.frontmatter.html}
          ></iframe>
      </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        html
      }
    }
  }
`
