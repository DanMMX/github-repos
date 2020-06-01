import React from 'react'
import { Container } from '@bootstrap-styled/v4'

import Header from './header'

interface Props {
  org: {
    name: string
  },
  buildDate: string
}

const Layout: React.FC<Props> = ({ children, org, buildDate }) => (
  <div style={{ fontFamily: 'Lato' }}>
    <Header org={org.name} />
    <Container>
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <br />
        Repos from {org.name} Organization, information updated on {buildDate}
      </footer>
    </Container>
  </div>
)

export default Layout
