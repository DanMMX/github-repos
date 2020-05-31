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

const Layout = ({ children, org, buildDate }) => {
  console.log(org)
  return (
    <>
      <Header org={org.name} />
      <Container>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <br />
          Repos from {org.name}, information updated on {buildDate}
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  org: PropTypes.shape({
    avatarUrl: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    repositories: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          description: PropTypes.string,
          id: PropTypes.string,
          name: PropTypes.string,
          url: PropTypes.string,
          stargazers: PropTypes.shape({
            totalCount: PropTypes.number
          }),
          mentionableUsers: PropTypes.shape({
            totalCount: PropTypes.number
          }),
        })
      }))
    }),
  }).isRequired,
  buildDate: PropTypes.string.isRequired,
}

export default Layout
