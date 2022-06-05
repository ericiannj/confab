import { Navbar, MainPanel } from '@/components'
import type { NextPage } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'

const Home: NextPage = () => {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <MainPanel />
        </>
    )
}

export default Home
