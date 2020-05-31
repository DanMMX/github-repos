import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)
  const org = process.env.GATSBY_GITHUB_ORG
  return (
    <Layout org={org}>
      <SEO title={`${org}'s repos`} />
    </Layout>
  )
}

export const query = graphql`
  query OrgQuery($org: String!) {
    github {
      organization (login: $org) {
        name
        description
        avatarUrl
        url
        repositories (first: 100) {
          totalCount
          edges {
            node {
              id
              name
              description
              url
              mentionableUsers (first: 1) {
                totalCount
              }
              stargazers (first: 1) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
