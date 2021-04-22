import * as React from "react"
import Testimonials from "../components/Testimonials"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Trips heading="Nossos Destinos Favoritos" />
    <Testimonials/>
    <Stats/>
    <Email/>
    
  </Layout>
)

export default IndexPage
