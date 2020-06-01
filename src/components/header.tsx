import { Link } from 'gatsby'
import React from 'react'
import { Navbar, Container, NavbarBrand } from '@bootstrap-styled/v4'

interface Props {
  org: string
}

const Header: React.FC<Props> = ({ org }) => (
  <Navbar light sticky>
    <Container>
      <div className="d-flex justify-content-between">
        <NavbarBrand tag={Link} to="/">
          {org}
        </NavbarBrand>
      </div>
    </Container>
  </Navbar>
)

export default Header
