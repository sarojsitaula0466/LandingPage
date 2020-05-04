import React from 'react'
import ServiceCard from '../components/servicecard/ServiceCard'
//import Layout from '../components/layout/index'
import servicesStyles from './services.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
const ServicePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulServices(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div className={servicesStyles.wrapper}>
      {data.allContentfulServices.edges.map(edge => {
        return <ServiceCard title={edge.node.title} />
      })}
    </div>
  )
}

export default ServicePage
