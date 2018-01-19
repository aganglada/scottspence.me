import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'

const NavMenu = styled.ul`
  grid-area: n;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 10px;
  margin: 1.5rem 0.1rem 1.5rem 0.1rem;
  padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  ${media.giant`
    grid-template-columns: repeat(4, auto);
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  `};
  ${media.desktop`
    margin: 0.5rem;
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  `};
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    list-style-type: none;
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
    &.responsive > li {
      display: block;
      text-align: left;
      padding: 0.5rem;
      justify-self: end;
      &:first-child {
        padding: 0.8rem 0rem;
      }
    }
  `};
  ${media.phone`
    margin: 1.5rem 0.1rem 1.5rem 0.1rem;
    padding: 1.5rem 0.1rem 1.5rem 0.1rem;
  `};
`

const NavItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  color: ${props => props.theme.white};
  /* padding: 0.5rem; */
`

const NavLink = styled(Link).attrs({
  color: props => props.theme.secondary.yellow
})`
  color: inherit;
  &:visited, &:active {
     color: inherit;
  }
  &:hover {
    color: ${props => props.color}
`

const PageNav = ({ nav }) => {
  const openNav = e => {
    e.preventDefault()
    const menu = document.getElementById('topnav')
    menu.classList.toggle('responsive')
  }
  const closeNav = () => {
    const width = window.innerWidth
    if (width < 769) {
      const menu = document.getElementById('topnav')
      menu.classList.remove('responsive')
    }
  }

  return (
    <NavMenu>
      {nav.map((item, index) => (
        <NavItem key={index}>
          <NavLink to={`/${item}`}>{item}</NavLink>
        </NavItem>
      ))}
    </NavMenu>
  )
}

PageNav.propTypes = {
  nav: PropTypes.array.isRequired
}

export default PageNav