import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Organization from '../components/organization'

const IndexPage = props => {
  const org = props.data.github.organization
  return (
    <Layout org={org} buildDate={props.pathContext.currentDate}>
      <SEO title={`${org.name}'s repos`} />
      <Organization org={org} />
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
        location
        websiteUrl
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
