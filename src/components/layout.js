/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  Container,
} from '@bootstrap-styled/v4';


import Header from "./header"
import "./layout.css"

const Layout = ({ children, repos, org }) => {
  return (
    <>
      <Header org={org} />
      <Container>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  repos: PropTypes.arrayOf([]),
  org: PropTypes.string.isRequired
}

export default Layout
