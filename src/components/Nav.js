import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { FaGithub, FaLinkedin, FaFreeCodeCamp, FaMedium, FaTwitter } from 'react-icons/fa';

const Nav = () => {
  return (
    <Div1>
      <H1a>Timothy Hoang</H1a>
      <P1>Full Stack Developer</P1>
      <P1>Houston, Texas</P1>

      <Div2>
        <FaGithub1 />
        <FaLinkedin1 />
        <FaFreeCodeCamp1 />
        <FaMedium1 />
        <FaTwitter1 />
      </Div2>

      <Div3>
        <Link to="#">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Portfolio</Link>
        <Link to="#">Contact</Link>
      </Div3>
    </Div1>
  )
}

const Div1 = styled.div``
const Div2 = styled.div``
const Div3 = styled.div``
const H1a = styled.h1``
const P1 = styled.p``
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
