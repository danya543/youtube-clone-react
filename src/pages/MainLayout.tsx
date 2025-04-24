import { Header } from '@components/Header/Header'
import { Mainpage } from '@pages/Mainpage';

import styles from './Main.module.scss'

export const MainLayout = () => {
    return (
        <section className={styles.container}>
            <Header />
            <Mainpage />
        </section>
    )
}