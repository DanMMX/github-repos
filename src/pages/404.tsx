import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface ContextProps {
  currentDate: string
}

interface DataProps {
  github: {
    organization: {
      name: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps, ContextProps>> = props => {
  const org = props.data.github.organization
  return (
      <Layout org={org} buildDate={props.pageContext.currentDate}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
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
