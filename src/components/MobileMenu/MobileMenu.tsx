import { Images } from '@components/constants'

import styles from './MobileMenu.module.scss'

export const MobileMenu = () => {
    const { Home, Trend, Subscriptions, Library } = Images;
    return (
        <div
            className={styles.container}>
            <ul>
                <li><img src={Home} alt="" />Home</li>
                <li><img src={Trend} alt="" />trending</li>
                <li><img src={Subscriptions} alt="" />subscriptions</li>
                <li><img src={Library} alt="" />library</li>
            </ul>
        </div>
    )
}
