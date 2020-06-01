import React from 'react'
import PropTypes from 'prop-types'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from '@bootstrap-styled/v4'
import styled from 'styled-components'

import { Dot, Law, Fork, Star, PR, Issue } from './icons'

const StyledGroupItem = styled(ListGroupItem)`
  text-decoration: none;
  box-sizing: border-box;

  ${ListGroup} & {
    flex-direction: column;
    align-items: flex-start;
  }
`

const StyledListGroupItemHeading = styled(ListGroupItemHeading)`
  text-decoration: underline;
  font-size: 1.5rem;
  color: black;
`

const RepoInfo = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  margin-right: 15px;
`

const Small = styled.span`
  font-size: 0.75rem;
  display: block;
  color: black;
  margin-top: 5px;
  a {
    text-decoration: underline;
    color: black;
  }
`

const Repo = ({
  name,
  primaryLanguage,
  description,
  url,
  licenseInfo,
  forkCount,
  updatedAt,
  isFork,
  parent,
  stargazers,
  pullRequests,
  issues,
}) => (
  <StyledGroupItem action>
    <StyledListGroupItemHeading tag="a" href={url}>
      {name}
    </StyledListGroupItemHeading>
    {(isFork || description) && (
      <ListGroupItemText>
        {description}
        {isFork && (
          <Small>
            Forked from{' '}
            <a href={parent.url} rel="noreferrer" target="_blank">
              {parent.owner.login}/{parent.name}
            </a>
          </Small>
        )}
      </ListGroupItemText>
    )}
    <ListGroupItemText>
      {licenseInfo && licenseInfo.name !== 'Other' && (
        <RepoInfo>
          <Law /> {licenseInfo.name}
        </RepoInfo>
      )}
      {primaryLanguage && (
        <RepoInfo>
          <Dot color={primaryLanguage.color} /> {primaryLanguage.name}
        </RepoInfo>
      )}
      <RepoInfo>
        <Fork /> {forkCount}
      </RepoInfo>
      <RepoInfo>
        <PR /> {pullRequests.totalCount}
      </RepoInfo>
      <RepoInfo>
        <Issue /> {issues.totalCount}
      </RepoInfo>
      <RepoInfo>
        <Star /> {stargazers.totalCount}
      </RepoInfo>
      <RepoInfo>Updated at {new Date(updatedAt).toDateString()}</RepoInfo>
    </ListGroupItemText>
  </StyledGroupItem>
)

Repo.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  stargazers: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
  forkCount: PropTypes.number,
  updatedAt: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }),
  licenseInfo: PropTypes.shape({
    name: PropTypes.string,
  }),
  pullRequests: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
  issues: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
  isFork: PropTypes.bool,
  parent: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
    }),
  }),
  repositoryTopics: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        topic: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
  }),
  mentionableUsers: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        avatarUrl: PropTypes.string,
      }),
    ),
  }),
}

export default Repo
