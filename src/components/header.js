import { Link } from "gatsby"
import PropTypes from 'prop-types'
import React from "react"
import {
  Navbar,
  Container,
  NavbarBrand,
} from '@bootstrap-styled/v4';

const Header = ({ org }) => (
  <Navbar light sticky>
    <Container fluid>
      <div className="d-flex justify-content-between">
        <NavbarBrand tag={Link} to="/">Github User: {org}</NavbarBrand>
      </div>
    </Container>
  </Navbar>
)

Header.propTypes = {
  org: PropTypes.string.isRequired
}

export default Header
