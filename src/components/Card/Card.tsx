import { CardProps } from "@src/types/types";

import styles from './Card.module.scss'

export const Card = (props: CardProps) => {
    const { header, img, author, views, duration } = props;
    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src={img} alt="poster" />
                <p>{duration}</p>
            </div>
            <h3>{header}</h3>
            <div className={styles.info}>
                <p>{views}k views</p>
                <p>{author}</p>
            </div>
        </div>
    )
}
