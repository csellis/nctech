import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    High
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bottyMcBotface"
    >
      <p className="hidden">
        <label htmlFor="bottyMcBotface">
          Dear Human, please don't fill this out:{' '}
          <input name="bottyMcBotface" />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="Your email address" />
        </label>
      </p>

      <p>
        <button type="submit">Subscribe</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage
