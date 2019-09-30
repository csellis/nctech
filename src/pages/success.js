import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/pageLayout'

const Success = () => (
  <Layout>
    <div className="flex flex-row">
      <h1>Great, one last thing...</h1>

      <h2>We just sent you an email with a confirmation link.</h2>
      <h2>
        <strong>Please check your inbox!</strong>
      </h2>
    </div>
  </Layout>
)

export default Success
