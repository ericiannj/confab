import {
    LogoContainer,
    PartnerContainer,
    PartnerDescription,
    PartnerHighlight,
    PartnerLogo,
    PartnerLogoContainer,
} from './styled'
import ForbesIcon from '../../../public/assets/icons/forbes-icon.png'
import FortuneIcon from '../../../public/assets/icons/fortune-icon.png'
import TcIcon from '../../../public/assets/icons/tc-icon.png'
import WsjIcon from '../../../public/assets/icons/wsj-icon.png'
import FinancialIcon from '../../../public/assets/icons/ft-icon.png'
import CbncIcon from '../../../public/assets/icons/cnbc-icon.png'

const PartnerPanel: React.FC = () => {
    return (
        <PartnerContainer>
            <PartnerLogoContainer>
                <LogoContainer>
                    <PartnerLogo src={ForbesIcon} />
                </LogoContainer>
                <LogoContainer>
                    <PartnerLogo src={FortuneIcon} />
                </LogoContainer>
                <LogoContainer>
                    <PartnerLogo src={TcIcon} />
                </LogoContainer>
                <LogoContainer>
                    <PartnerLogo src={WsjIcon} />
                </LogoContainer>
                <LogoContainer>
                    <PartnerLogo src={FinancialIcon} />
                </LogoContainer>
                <LogoContainer>
                    <PartnerLogo src={CbncIcon} />
                </LogoContainer>
            </PartnerLogoContainer>
            <PartnerDescription>
                Used by over <PartnerHighlight>50+ million</PartnerHighlight>{' '}
                users worldwide and trusted by top=tier companies.
            </PartnerDescription>
        </PartnerContainer>
    )
}

export default PartnerPanel
