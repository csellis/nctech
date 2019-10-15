import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/pageLayout'
import { flattenDiagnosticMessageText } from 'typescript'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark.frontmatter
  const topIssueNumber = data.allMarkdownRemark.nodes[0].frontmatter.issue

  console.log(topIssueNumber)

  const prevNumber = post.issue === 1 ?  <></> : <Link to={`/issue/${post.issue -1}`}>« Prev</Link>;
  const nextNumber = post.issue === topIssueNumber ? <></> : <Link to={`/issue/${post.issue + 1}`}>Next »</Link>

  return (
      <div style={{ display: 'flex', flexDirection: 'column', borderTop:'8px solid #fbd38d'}}>
        <nav style={{ width: '600px', margin: 'auto'}}>
          <div style={{ display: 'inline-block', background: '#fbd38d', textDecoration: 'none', padding: '0.75rem 0 0.75rem 0'}}>
              <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '2rem', fontWeight: '700'}}>
                NC Tech Scene
              </Link>
          </div>
        </nav>
        <div style={{ height: '40px', display: 'flex', justifyContent: 'space-between', width: '600px', margin: 'auto', alignItems: 'center'}}>
          <div>
            {prevNumber}
          </div>
          <div>
            {nextNumber}
          </div>
        </div>
        <iframe
            style={{ flex: 1, minHeight: 'calc(100vh - 40px - 8px)', border: 'none' }}
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
