import React from 'react'
import PropTypes from 'prop-types'
import {
  ListGroup,
} from '@bootstrap-styled/v4';
import styled from 'styled-components'

import Repo from './repo'
import ExtraInfoCard from './extraInfoCard'

const ReposContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ReposColumn = styled.div`
  width: 65%;

  & + & {
    width: 30%;
  }
`

const Repos = ({ repos }) => (
  <ReposContainer>
    <ReposColumn>
      <ListGroup>
        {repos.map(repo => <Repo key={repo.id} {...repo} />)}
      </ListGroup>
    </ReposColumn>
    <ReposColumn>
      <ExtraInfoCard title="Top Languages" languages={repos.map(repo => repo.primaryLanguage)} />
      <ExtraInfoCard title="Most Used Topics" topics={repos.map(repo => repo.primaryLanguage)} />
      <ExtraInfoCard title="People" people={repos.map(repo => repo.primaryLanguage)} />
    </ReposColumn>
  </ReposContainer>
)

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    stargazers: PropTypes.shape({
      totalCount: PropTypes.number
    }),
    forkCount: PropTypes.number,
    updatedAt: PropTypes.string,
    primaryLanguage: PropTypes.shape({
      id: PropTypes.string,
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
  }))
}

export default Repos
