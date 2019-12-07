import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/pageLayout'

const Issue = ({ html, post }) => {
  if (html) {
    return (
      <div className="issueWrapper">
        <div id="issueContent" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }

  return (
    <iframe
      style={{
        flex: 1,
        minHeight: 'calc(100vh - 40px - 8px)',
        border: 'none',
      }}
      title="Iphone Preview"
      src={post.html}
    ></iframe>
  )
}

const issues = ({ data }) => {
  // console.log(data)
  const post = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const topIssueNumber = data.allMarkdownRemark.nodes[0].frontmatter.issue

  // console.log(topIssueNumber)

  const prevNumber =
    post.issue === 1 ? (
      <></>
    ) : (
      <Link to={`/issue/${post.issue - 1}`}>« Prev</Link>
    )
  const nextNumber =
    post.issue === topIssueNumber ? (
      <></>
    ) : (
      <Link to={`/issue/${post.issue + 1}`}>Next »</Link>
    )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderTop: '8px solid #fbd38d',
      }}
    >
      <nav style={{ width: '600px', margin: 'auto' }}>
        <div
          style={{
            display: 'inline-block',
            marginTop: '0.75rem',
          }}
        >
          <Link
            to="/"
            style={{
              padding: '0.25rem 0.5rem',
              textDecoration: 'none',
              color: '#333',
              fontSize: '2rem',
              fontWeight: '700',
              background: '#fbd38d',
            }}
          >
            NC Tech Scene
          </Link>
        </div>
        <div className="issuesPager">
          <div>{prevNumber}</div>
          <div>{nextNumber}</div>
        </div>
      </nav>
      <Issue html={html} post={post} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        html
        issue
      }
    }
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
export default issues
