import React from 'react'
import { ListGroup } from '@bootstrap-styled/v4'
import styled from 'styled-components'

import { Props as RepoProps } from './repo'
import Repo from './repo'
import ExtraInfoCard from './extraInfoCard'
import { ReposContainer } from './common'

interface Props {
  repos: RepoProps[],
}

const ReposColumn = styled.div`
  width: 65%;

  & + & {
    width: 30%;
  }

  @media screen and (max-width: 767px) {
    width: 100% !important;
  }
`

const Repos: React.FC<Props> = ({ repos }) => (
  <ReposContainer>
    <ReposColumn>
      <ListGroup>
        {repos.map((repo: RepoProps) => (
          <Repo key={repo.id} {...repo} />
        ))}
      </ListGroup>
    </ReposColumn>
    <ReposColumn>
      <ExtraInfoCard
        title="Top Languages"
        languages={repos.map((repo: RepoProps) => repo.primaryLanguage)}
      />
      <ExtraInfoCard
        title="Most Used Topics"
        topics={repos.map((repo: RepoProps) => repo.repositoryTopics.nodes).flat()}
      />
      <ExtraInfoCard
        title="People"
        people={repos.map((repo: RepoProps) => repo.mentionableUsers.nodes).flat()}
      />
    </ReposColumn>
  </ReposContainer>
)

export default Repos
