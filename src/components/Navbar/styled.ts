import styled from 'styled-components'
import Image from 'next/image'

export const NavbarContainer = styled.div`
    height: 4em;
    padding-top: 1em;
    padding-left: 2em;
`

export const NavbarLogoImage = styled(Image)``

export const NavbarLink = styled.a`
    font-size: 1em;
    margin-right: 2em;
    cursor: pointer;
`

export const NavbarLinkStructure = styled.div`
    float: right;
    margin-top: 0.4em;
    margin-right: 4em;
`

export const NavbarButton = styled.button`
    height: 1.5em;
    padding: 0 1em;
    border-radius: 1em;
    background-color: black;
    font-size: 0.9em;
    color: white;
    cursor: pointer;
`
