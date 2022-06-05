import {
    ImagesContainer,
    MainDescription,
    MainDescriptionStructure,
    MainImage,
    MainPanelContainer,
    MainSubtitle,
    MainTitle,
    MainTitleStructure,
    NewImage,
} from './styled'
import MainPanelImage from '../../../public/assets/images/main.png'
import NewPanelImage from '../../../public/assets/images/new.png'

const MainPanel: React.FC = () => {
    return (
        <MainPanelContainer>
            <MainDescriptionStructure>
                <MainTitleStructure>
                    <MainTitle>Virtual</MainTitle>
                    <MainSubtitle>Conferences</MainSubtitle>
                </MainTitleStructure>
                <MainDescription>
                    Virtual meetings, and conferences, anyone can share, join or
                    host (virtual events).
                </MainDescription>
            </MainDescriptionStructure>
            <MainImage src={MainPanelImage} />
            <ImagesContainer>
                <NewImage src={NewPanelImage} width="120px" height="120px" />
            </ImagesContainer>
        </MainPanelContainer>
    )
}

export default MainPanel
