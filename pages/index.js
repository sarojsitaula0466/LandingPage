import React from 'react'
import { Link } from 'gatsby'
import SolidButton from '../components/buttons/ButtonSolid'
import Grid from '../components/grid/Gridcontainer'
import OutlineButton from '../components/buttons/Outlinebtn'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <SolidButton />
    <OutlineButton />
    <Grid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage