import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ListApi = () => {
  return (
    <Layout>
      <SEO title="SPQL API" />
      <StaticQuery
        query={gettingStartedQuery}
        render={data => data.allMarkdownRemark.edges.map(edge => (
            <div key={edge.node.id}>
              <h1>{edge.node.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{__html: edge.node.html}} />
            </div>
          ))
        }
      />
    </Layout>
  )
}

const gettingStartedQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {id: {eq: "list-services"}}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
  }
  `

export default ListApi