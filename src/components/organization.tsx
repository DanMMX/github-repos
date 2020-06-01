import React from 'react'
import styled from 'styled-components'
import { Github, Marker, Link as LinkIcon, Repo } from './icons'
import { Card, CardText, CardTitle, CardBlock } from './common'

interface Props {
  org: {
    name: string,
    url: string,
    avatarUrl: string,
    description: string,
    websiteUrl: string,
    location: string,
    repositories: {
      totalCount: number,
    },
  }
}

const CardImg = styled.img`
  width: 100px;
  margin-right: 10px;
`

const CardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const CardInfo = styled.span`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`

const Organization: React.FC<Props> = ({
  org: {
    name,
    url,
    websiteUrl,
    avatarUrl,
    description,
    location,
    repositories,
  },
}) => (
  <Card isOrg>
    <CardImg src={avatarUrl} alt={name} />
    <CardBlock>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>
        <CardInfo as={Link} href={url} target="_blank">
          <Github />
          {url}
        </CardInfo>
        <CardInfo>
          <Marker />
          {location}
        </CardInfo>
        <CardInfo>
          <Repo /> {repositories.totalCount} Repositories
        </CardInfo>
        {websiteUrl && (
          <CardInfo as={Link} href={websiteUrl} target="_blank">
            <LinkIcon />
            {websiteUrl}
          </CardInfo>
        )}
      </CardSubtitle>
      <CardText>{description}</CardText>
    </CardBlock>
  </Card>
)

export default Organization
