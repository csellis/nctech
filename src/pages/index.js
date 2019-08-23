import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="bg-gray-200 rounded-lg p-6 font-sans">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bottyMcBotface"
      >
        <p className="hidden">
          <label htmlFor="bottyMcBotface">
            Dear Human, please don't fill this out:{' '}
            <input type="hidden" name="bottyMcBotface" />
            <input type="hidden" name="form-name" value="contact" />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="p-4"
            />
          </label>
        </p>

        <p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            type="submit"
          >
            Subscribe
          </button>
        </p>
      </form>
    </div>
  </Layout>
)

export default IndexPage
