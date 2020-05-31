import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { 
  Card, 
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
} from '@bootstrap-styled/v4';
import { Github, Marker } from '../components/icons'

const CardInfo = styled.span`
  display: inline-block;
  text-decoration: none;
  margin-right: 5px;
`

const Organization = ({
  org: {
    name,
    url,
    websiteUrl,
    avatarUrl,
    description,
    location,
  }
}) => (
  <Card width="50%">
    <CardImg top src={avatarUrl} alt={name} />
    <CardBlock>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>
        <CardInfo as="a" href={url} target="_blank"><Github /></CardInfo>
        <CardInfo as="a" href={websiteUrl} target="_blank">{websiteUrl}</CardInfo>
        <CardInfo><Marker /> {location}</CardInfo>
      </CardSubtitle>
      <CardText>{description}</CardText>
    </CardBlock>
  </Card>
)

Organization.propTypes = {
  org: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    avatarUrl: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
  }).isRequired
}

export default Organization