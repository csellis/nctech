import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import Example from '../components/example'

const IndexPage = () => (
  <Layout>
    <ContactForm className="flex-1 contactForm" />
    <Example />
  </Layout>
)

export default IndexPage
