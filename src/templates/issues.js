import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/pageLayout'
import { flattenDiagnosticMessageText } from 'typescript'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark.frontmatter
  const topIssueNumber = data.allMarkdownRemark.nodes[0].frontmatter.issue

  console.log(topIssueNumber)

  const prevNumber = post.issue === 1 ?  <div></div> : <Link to={`/issue/${post.issue -1}`}>« Prev</Link>;
  const nextNumber = post.issue === topIssueNumber ? <div></div> : <Link to={`/issue/${post.issue + 1}`}>Next »</Link>

  return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ height: '40px'}}>
          {prevNumber}
          {nextNumber}
        </div>
        <iframe
            style={{ flex: 1, minHeight: 'calc(100vh - 40px)', border: 'none' }}
            title="Iphone Preview"
            src={post.html}
          ></iframe>
      </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        html
        issue
      }
    }
    allMarkdownRemark(filter: {frontmatter: {issue: {gte: 1}}}, sort: {order: DESC, fields: frontmatter___issue}, limit: 1) {
      nodes {
        frontmatter {
          issue
        }
      }
  }
  }
`
