import { Navbar, MainPanel, PartnerPanel } from '@/components'
import type { NextPage } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'

const Home: NextPage = () => {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <MainPanel />
            <PartnerPanel />
        </>
    )
}

export default Home
