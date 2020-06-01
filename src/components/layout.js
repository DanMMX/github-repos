import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@bootstrap-styled/v4'

import Header from './header'

const Layout = ({ children, org, buildDate }) => (
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  org: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  buildDate: PropTypes.string.isRequired,
}

export default Layout
