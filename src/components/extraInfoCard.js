import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardBlock, CardTitle, CardText } from './common'

const ExtraInfoCard = ({ title }) => (
  <Card>
    <CardBlock>
      <CardTitle>{title}</CardTitle>
      <CardText>Text</CardText>
    </CardBlock>
  </Card>
)

ExtraInfoCard.propTypes = {
  title: PropTypes.string
}

export default ExtraInfoCard