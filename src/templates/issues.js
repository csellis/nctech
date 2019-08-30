import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/pageLayout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>Issue!</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
