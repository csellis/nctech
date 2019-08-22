import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="home">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="hero-img wow fadeIn">
              <img
                className="img-fluid"
                src="assets/images/big.png"
                alt="Home"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="hero-content wow fadeIn">
              <h1>Multi purpose business landing page</h1>
              <p>
                Software and analytics services will render your chunks into
                meaningful data.
              </p>
              <a className="btn-action js-scroll-trigger" href="#signup">
                Register now
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <div className="client-list wow fadeIn">
              <ul>
                <li>
                  <img
                    className="img-fluid"
                    src="assets/icons/1.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="assets/icons/2.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="assets/icons/3.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="assets/icons/4.png"
                    alt="Client"
                  />{' '}
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="assets/icons/5.png"
                    alt="Client"
                  />{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
