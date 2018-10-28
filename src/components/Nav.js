import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Div, H1, P } from './globals'
import { FaGithub, FaLinkedin, FaFreeCodeCamp, FaMedium, FaTwitter } from 'react-icons/fa';

const Nav = () => {
  return (
    <Div>
      <H1>Timothy Hoang</H1>
      <P>Full Stack Developer</P>
      <P>Houston, Texas</P>

      <Div>
        <FaGithub1 />
        <FaLinkedin1 />
        <FaFreeCodeCamp1 />
        <FaMedium1 />
        <FaTwitter1 />
      </Div>

      <Div>
        <Link to="#">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Portfolio</Link>
        <Link to="#">Contact</Link>
      </Div>
    </Div>
  )
}

const FaGithub1 = styled(FaGithub)`
  color: white;
  background: #24292E;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaLinkedin1 = styled(FaLinkedin)`
  color: white;
  background: #0077B5;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaFreeCodeCamp1 = styled(FaFreeCodeCamp)`
  color: white;
  background: #006100;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaMedium1 = styled(FaMedium)`
  color: #13C164;
  background: #F7F7F7;
  border-radius: 2px;
  width: 50px;
  height: 50px;
  `
const FaTwitter1 = styled(FaTwitter)`
  color: white;
  background: #1C9BEA;
  border-radius: 2px;
  width: 50px;
  height: 50px;
`

export default Nav
