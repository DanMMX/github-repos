import React from 'react'

import { Card, CardBlock, CardTitle, CardText } from './common'
import { PrimaryLanguage, Topic, User } from './repo'

interface Props {
  title: string,
  languages?: PrimaryLanguage[],
  topics?: Topic[],
  people?: User[]
}

const Languages: React.FC<{ languages: PrimaryLanguage[] }> = ({ languages }) => (
  <h3>Languages</h3>
)

const ExtraInfoCard: React.FC<Props> = ({ title, languages, topics, people }) => {
  console.log(languages)
  console.log(people)
  console.log(topics)
  return (
    <Card>
      <CardBlock>
        <CardTitle>{title}</CardTitle>
        <CardText>
          Text
        </CardText>
      </CardBlock>
    </Card>
  )
}

export default ExtraInfoCard
