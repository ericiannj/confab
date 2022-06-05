import {
    NavbarButton,
    NavbarContainer,
    NavbarLink,
    NavbarLinkStructure,
    NavbarLogoImage,
} from './styled'
import LogoImage from '../../../public/assets/icons/logo-icon.png'

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarLogoImage src={LogoImage} />
            <NavbarLinkStructure>
                <NavbarLink>Browser</NavbarLink>
                <NavbarLink>Enter a code/link</NavbarLink>
                <NavbarLink>Confab</NavbarLink>
                <NavbarButton>+ New event</NavbarButton>
            </NavbarLinkStructure>
        </NavbarContainer>
    )
}

export default Navbar
