import React from 'react'
import { graphql } from 'gatsby'
import { Email, Item, Span, A } from 'react-html-email'
import Layout from '../components/pageLayout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Email title="Issue 1">
      <Span fontSize={120}>Taco Copter</Span>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Email>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
