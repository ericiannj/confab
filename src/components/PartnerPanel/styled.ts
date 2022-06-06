import Image from 'next/image'
import styled from 'styled-components'

export const PartnerContainer = styled.div`
    height: 15em;
    background-color: #f5f4f3;
    padding-top: 3.5em;
`

export const PartnerLogoContainer = styled.div`
    max-width: 55em;
    margin: auto;
    padding: 0;
    justify-content: space-between;
    display: flex;
    vertical-align: middle;
`

export const LogoContainer = styled.div``

export const PartnerLogo = styled(Image)`
    margin: auto;
`

export const PartnerDescription = styled.p`
    font-size: 1em;
    color: #323334;
    max-width: 20em;
    text-align: center;
    margin: 2em auto;
`

export const PartnerHighlight = styled.span`
    font-size: 1em;
    color: #fb554c;
    display: inline;
`
