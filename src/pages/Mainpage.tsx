import { MainVideo } from '@components/MainVideo/MainVideo'
import { Sidebar } from '@components/Sidebar/Sidebar'

import styles from './Main.module.scss'

export const Mainpage = () => {
    return (
        <section className={styles.content}>
            <MainVideo />
            <Sidebar />
        </section>
    )
}
