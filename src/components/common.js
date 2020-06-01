import React from 'react'
import styled from 'styled-components'
import { Badge } from '@bootstrap-styled/v4'

import { colors } from './variables'

export const CardText = styled.div``
export const CardBlock = styled.div``
export const CardTitle = styled.div`
  margin-bottom: 10px;
`

export const Card = styled(({ isOrg, ...rest }) => <div {...rest} />)`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  width: ${props => (props.isOrg ? '65%' : '100%')};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.fadedGrey};
  border-image: initial;
  padding: 16px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 0.25rem;
  margin-top: ${props => (props.isOrg ? '20px' : 0)};
  margin-bottom: 20px;

  ${CardTitle} {
    font-weight: ${props => (props.isOrg ? 'bold' : 'normal')};
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const StyledBadge = styled(Badge)`
  & + & {
    margin-left: 7px;
  }
`

export const ReposContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`
