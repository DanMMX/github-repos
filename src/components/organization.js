import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Github, Marker, Link as LinkIcon } from './icons'
import { colors } from './variables'

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.fadedGrey};
  border-image: initial;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 4px ${colors.fadedGrey};
  margin-bottom: 20px;
  margin-top: 20px;
`

const CardImg = styled.img`
  width: 100px;
  margin-right: 10px;
`

const CardBlock = styled.div``
const CardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const CardText = styled.div``

const CardInfo = styled.span`
  display: inline-block;
  text-decoration: none;
  margin-right: 5px;
`

const CardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
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
  <Card>
    <CardImg top src={avatarUrl} alt={name} />
    <CardBlock>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>
        <CardInfo as={Link} href={url} target="_blank"><Github /></CardInfo>
        {websiteUrl && <CardInfo as={Link} href={websiteUrl} target="_blank"><LinkIcon />{websiteUrl}</CardInfo>}
        <CardInfo><Marker />{location}</CardInfo>
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