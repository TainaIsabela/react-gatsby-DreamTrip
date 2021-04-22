import * as React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trips heading="Nossos Destinos Favoritos" />
  </Layout>
)

export default IndexPage
