import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from '@bootstrap-styled/v4'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Dot, Law, Fork, Star, PR, Issue } from './icons'
import { StyledBadge } from './common'

export interface PrimaryLanguage {
  color: string;
  name: string;
}

export interface Topic {
  topic: {
    id: string;
    name: string;
  };
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Props {
  description: string;
  id: string;
  name: string;
  url: string;
  stargazers: {
    totalCount: number;
  };
  forkCount: number;
  updatedAt: string;
  primaryLanguage: PrimaryLanguage;
  licenseInfo: {
    name: string;
  };
  pullRequests: {
    totalCount: number;
  };
  issues: {
    totalCount: number;
  };
  isFork: boolean;
  parent: {
    name: string;
    url: string;
    owner: {
      login: string;
    };
  };
  repositoryTopics: {
    nodes: Topic[];
  };
  mentionableUsers: {
    nodes: User[];
  };
}

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

const Repo: React.FC<Props> = ({
  name,
  primaryLanguage,
  description,
  licenseInfo,
  forkCount,
  updatedAt,
  isFork,
  parent,
  stargazers,
  pullRequests,
  issues,
  repositoryTopics
}) => (
  <StyledGroupItem action>
    <StyledListGroupItemHeading tag={Link} to={`/${name}`}>
      {name}
    </StyledListGroupItemHeading>
    {(isFork || description || (repositoryTopics && repositoryTopics.nodes.length)) && (
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
        {repositoryTopics && repositoryTopics.nodes.length && (
          <Small>
            {repositoryTopics.nodes.map((topic: Topic) => <StyledBadge key={topic.topic.id}>{topic.topic.name}</StyledBadge>)}
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

export default Repo
