import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Example from '../components/example'

const IndexPage = () => (
  <Layout>
    <div className="flex flex-row">
      <ContactForm className="flex-1" />
      <Example className="flex-1 h-screen" />
    </div>
  </Layout>
)

export default IndexPage
