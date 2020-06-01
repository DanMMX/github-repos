import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Organization from '../components/organization'
import Repos from '../components/repos'

const IndexPage = props => {
  const org = props.data.github.organization
  return (
    <Layout org={org} buildDate={props.pageContext.currentDate}>
      <SEO title={`${org.name}'s repos`} />
      <Organization org={org} />
      <Repos repos={org.repositories.edges.map(edge => edge.node)} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    github: PropTypes.shape({
      organization: PropTypes.shape({
        avatarUrl: PropTypes.string,
        description: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        repositories: PropTypes.shape({
          totalCount: PropTypes.number,
          edges: PropTypes.arrayOf(PropTypes.shape({
            node: PropTypes.shape({
              description: PropTypes.string,
              id: PropTypes.string,
              name: PropTypes.string,
              url: PropTypes.string,
              stargazers: PropTypes.shape({
                totalCount: PropTypes.number
              }),
              pullRequests: PropTypes.shape({
                totalCount: PropTypes.number
              }),
              issues: PropTypes.shape({
                totalCount: PropTypes.number
              }),
              forkCount: PropTypes.number,
              updatedAt: PropTypes.string,
              primaryLanguage: PropTypes.shape({
                color: PropTypes.string,
                name: PropTypes.string
              }),
              licenseInfo: PropTypes.shape({
                name: PropTypes.string
              }),
              isFork: PropTypes.bool,
              parent: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string,
                owner: PropTypes.shape({
                  login: PropTypes.string
                })
              }),
              repositoryTopics: PropTypes.shape({
                nodes: PropTypes.arrayOf(PropTypes.shape({
                  topic: PropTypes.shape({
                    name: PropTypes.string
                  })
                }))
              }),
              mentionableUsers: PropTypes.shape({
                nodes: PropTypes.arrayOf(PropTypes.shape({
                  id: PropTypes.string,
                  name: PropTypes.string,
                  avatarUrl: PropTypes.string,
                }))
              })
            })
          }))
        }),
      }).isRequired,
    })
  })
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
              isFork
              repositoryTopics(first: 100) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              mentionableUsers(first: 10) {
                nodes {
                  id
                  name
                  avatarUrl
                }
              }
              pullRequests {
                totalCount
              }
              issues {
                totalCount
              }
              parent {
                name
                url
                owner {
                  login
                }
              }
              licenseInfo {
                name
              }
              forkCount
              updatedAt
              primaryLanguage {
                color
                name
              }
              description
              url
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
