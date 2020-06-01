import React from 'react'
import { PageProps } from 'gatsby'
import { ListGroup } from '@bootstrap-styled/v4'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Organization, { Organization as OrgType } from '../components/organization'
import Repo, { Props } from '../components/repo'
import { ReposContainer } from '../components/common'

interface ContextProps {
  currentDate: string;
  repo: Props;
  readme: string;
  organization: Omit<OrgType, 'repositories'>;
}

const RepoPage: React.FC<PageProps<{}, ContextProps>> = ({ pageContext }) => {
  const { organization, readme, repo } = pageContext

  return (
    <Layout org={organization} buildDate={pageContext.currentDate}>
      <SEO title={`${organization.name}'s repos`} />
      <Organization org={organization} />
      <ReposContainer>
        <ListGroup>
          <Repo {...repo} />
        </ListGroup>
      </ReposContainer>
      {readme && <ReactMarkdown source={readme} />}
    </Layout>
  )
}

export default RepoPage
