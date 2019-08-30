const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.issue) {
      createNodeField({
        node,
        name: `slug`,
        value: `/issue${slug}`,
      })
    } else {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const issues = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              issue
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  issues.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log(node)
    if (node.frontmatter.issue) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/issues.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    } else {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/pages.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}
