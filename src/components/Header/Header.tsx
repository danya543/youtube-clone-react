import { Images } from "@components/constants";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";

import styles from './Header.module.scss'

export const Header = () => {
    const { BurgerMenu, Logo, VideoIcon, Menu, Notification, Profile, Search, More } = Images;
    return (
        <header className={styles.container}>
            <div className={styles.logo_menu}>
                <Button image={BurgerMenu} classname={styles.burger_menu} />
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.search_input}>
                <Input type={"text"} placeholder={"Search"} />
                <img src={Search} alt="" />
            </div>
            {window.innerWidth < 400 ?
                <img src={More} alt="" className={styles.more} />
                : <div className={styles.profile_settings}>
                    <img src={VideoIcon} alt="" />
                    <img src={Menu} alt="" />
                    <div className={styles.notification}>
                        <img src={Notification} alt="" />
                        <p>3</p>
                    </div>
                    <img src={Profile} alt="" />
                </div>}
        </header>
    )
}
