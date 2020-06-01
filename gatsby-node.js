/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const textract = require('textract')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      org: process.env.GATSBY_GITHUB_ORG,
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
    },
  })
}

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  const query = `
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
                      id
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

  const { data } = await graphql(query, { org: process.env.GATSBY_GITHUB_ORG })
  const { repositories, ...organization } = data.github.organization

  return Promise.all(repositories.edges.map(async ({ node: repo }) => {
    const readme = await new Promise(resolve => {
      textract.fromUrl(
        `${repo.url.replace('https://github.com/', 'https://raw.githubusercontent.com/')}/master/README.md`,
        { preserveLineBreaks: true },
        function(error, text) {
          resolve(text)
        }
      )
    })

    return createPage({
      path: `/${repo.name}`,
      component: path.resolve('src/templates/repo.tsx'),
      context: {
        repo,
        readme,
        organization: {
          ...organization,
          repositories: {
            totalCount: repositories.totalCount
          }
        },
        currentDate: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
      },
    })
  }));
}