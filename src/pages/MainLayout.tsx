import { Header } from '@components/Header/Header'
import { MobileMenu } from '@components/MobileMenu/MobileMenu';
import { Mainpage } from '@pages/Mainpage';

import styles from './Main.module.scss'

export const MainLayout = () => {
    return (
        <section className={styles.container}>
            <Header />
            <Mainpage />
            {window.innerWidth < 400 && <MobileMenu />}
        </section>
    )
}