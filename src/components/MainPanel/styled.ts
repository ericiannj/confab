import Image from 'next/image'
import styled from 'styled-components'

export const MainPanelContainer = styled.div`
    height: 45em;
    padding: 2em 4em;
`

export const MainTitleStructure = styled.div``

export const MainTitle = styled.h1`
    font-size: 4em;
    color: black;
`

export const MainSubtitle = styled.h1`
    font-size: 4em;
    margin-left: 0.5em;
    color: #8dbab5;
`

export const MainDescriptionStructure = styled.div`
    display: flex;
    margin-bottom: 2em;
`

export const MainDescription = styled.p`
    font-size: 1em;
    width: 25em;
    position: absolute;
    right: 0;
    margin-right: 4em;
    margin-top: 7em;
`

export const ImagesContainer = styled.div`
    position: fixed;
    top: 13em;
    left: 40em;
`

export const MainImage = styled(Image)`
    border-radius: 3em;
    position: fixed;
`

export const NewImage = styled(Image)``
