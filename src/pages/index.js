import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div style={{ color: `tomato` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="http://lorempixel.com/400/200/" alt="" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
