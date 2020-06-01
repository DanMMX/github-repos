import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = props => {
  const org = props.data.github.organization
  console.log('org', org)
  return (
      <Layout org={org} buildDate={props.pageContext.currentDate}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  pageContext: PropTypes.shape({
    currentDate: PropTypes.string
  }),
  data: PropTypes.shape({
    github: PropTypes.shape({
      organization: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    }),
  }),
}

export const query = graphql`
  query ($org: String!) {
    github {
      organization(login: $org) {
        name
      }
    }
  }
`

export default NotFoundPage
