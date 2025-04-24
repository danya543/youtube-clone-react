import { Card } from "@components/Card/Card";
import { CardsInfo } from "@components/constants";
import { Button } from "@ui/Button";

import styles from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <aside>
            <div className={styles.header}>
                <h3>Next</h3>
                <p>Autoplay<Button /></p>
            </div>
            {CardsInfo.map((item, index) => <Card author={item.author} views={item.views} img={item.img} header={item.header} duration={item.duration} key={index} />)}
        </aside>
    )
}
