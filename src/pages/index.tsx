import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Organization from '../components/organization'
import Repos from '../components/repos'

interface DataProps {
  github: {
    organization: {
      avatarUrl: string,
      description: string,
      name: string,
      url: string,
      repositories: {
        totalCount: number,
        edges: [{
          node: {
            description: string,
            id: string,
            name: string,
            url: string,
            stargazers: {
              totalCount: number,
            },
            pullRequests: {
              totalCount: number,
            },
            issues: {
              totalCount: number,
            },
            forkCount: number,
            updatedAt: string,
            primaryLanguage: {
              color: string,
              name: string,
            },
            licenseInfo: {
              name: string,
            },
            isFork: boolean,
            parent: {
              name: string,
              url: string,
              owner: {
                login: string,
              },
            },
            repositoryTopics: {
              nodes: [{
                topic: {
                  name: string,
                },
              }],
            },
            mentionableUsers: {
              nodes: [{
                id: string,
                name: string,
                avatarUrl: string,
              }],
            },
          },
        }],
      },
    },
  },
}

interface ContextProps {
  currentDate: string
}

const IndexPage: React.FC<PageProps<DataProps, ContextProps>> = ({ data, pageContext }) => {
  const org = data.github.organization
  console.log('org', org)
  return (
    <Layout org={org} buildDate={pageContext.currentDate}>
      <SEO title={`${org.name}'s repos`} />
      <Organization org={org} />
      <Repos repos={org.repositories.edges.map(edge => edge.node)} />
    </Layout>
  )
}

export const query = graphql`
  query ($org: String!) {
    github {
      organization(login: $org) {
        name
        description
        avatarUrl
        url
        location
        websiteUrl
        repositories(first: 100) {
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
              stargazers(first: 1) {
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
