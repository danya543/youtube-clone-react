import { DescriptionInfo, Images } from "@components/constants"
import { Button } from "@ui/Button";

import styles from './Description.module.scss'

export const Description = () => {
    const { name, date, description } = DescriptionInfo;
    const { ChannelIcon } = Images;
    return (
        <div className={styles.container}>
            <img src={ChannelIcon} alt="icon" />
            <h3>{name}</h3>
            <span>{date}</span>
            <div className={styles.description}>
                <p>{description}</p>
                <Button text={'Show more'} />
            </div>
        </div>
    )
}
