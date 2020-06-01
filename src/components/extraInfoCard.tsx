import React from 'react'
import styled from 'styled-components'

import { Card, CardBlock, CardTitle, CardText, StyledBadge } from './common'
import { Dot } from './icons'
import { PrimaryLanguage, Topic, User } from './repo'


interface Props {
  title: string;
  languages?: PrimaryLanguage[];
  topics?: Topic[];
  people?: User[];
}

interface MappedTopic {
  amount: number;
  topic: Topic
}

interface MappedLanguage {
  amount: number;
  language: PrimaryLanguage
}

interface MappedUser {
  amount: number;
  user: User
}

const getLanguages = (languages: PrimaryLanguage[]): MappedLanguage[] => {
  let single: Record<string, MappedLanguage> = {}
  languages.forEach((language: PrimaryLanguage) => {
    if (!language) {
      return
    }
    if (!single[language.name]) {
      single[language.name] = {
        amount: 0,
        language
      }
    }
  })
  return Object.values(single).sort((a, b) => a.amount < b.amount ? 1 : -1)
}

const getUsers = (users: User[]): MappedUser[] => {
  let single: Record<string, MappedUser> = {}
  users.forEach((user: User) => {
    if (!user) {
      return
    }
    if (!single[user.id]) {
      single[user.id] = {
        amount: 0,
        user
      }
    }
  })

  return Object.values(single).sort((a, b) => a.amount < b.amount ? 1 : -1).slice(0, 12)
}

const getTopics = (topics: Topic[]): MappedTopic[] => {
  let single: Record<string, MappedTopic> = {}
  topics.forEach((topic: Topic) => {
    if (!topic) {
      return
    }
    if (!single[topic.topic.name]) {
      single[topic.topic.name] = {
        amount: 0,
        topic
      }
    }
  })
  return Object.values(single).sort((a, b) => a.amount < b.amount ? 1 : -1)
}

const Item = styled.div`
  display: inline-block;
  margin-right: 15px;
`

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 10px;
`

const Languages: React.FC<{ languages: PrimaryLanguage[] }> = ({ languages }) => <>
  {getLanguages(languages).map((lang: MappedLanguage) => (
    <Item key={lang.language.name}>
      <Dot color={lang.language.color} /> {lang.language.name}
    </Item>
  ))}
</>

const People: React.FC<{ people: User[] }> = ({ people }) => <>
  {getUsers(people).map((user: MappedUser) => (
    <Item key={user.user.id}>
      <UserImg src={user.user.avatarUrl} />
    </Item>
  ))}
</>

const Topics: React.FC<{ topics: Topic[] }> = ({ topics }) => <>
  {getTopics(topics).map((topic: MappedTopic) => (
    <Item key={topic.topic.topic.name}>
      <StyledBadge>{topic.topic.topic.name}</StyledBadge>
    </Item>
  ))}
</>

const ExtraInfoCard: React.FC<Props> = ({ title, languages, topics, people }) => (
  <Card>
    <CardBlock>
      <CardTitle>{title}</CardTitle>
      <CardText>
        {languages && <Languages languages={languages} />}
        {topics && <Topics topics={topics} />}
        {people && <People people={people} />}
      </CardText>
    </CardBlock>
  </Card>
)

export default ExtraInfoCard
