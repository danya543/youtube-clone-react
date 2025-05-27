import { Description } from "@components/Description/Description"
import { VideoCard } from "@components/VideoCard/VideoCard"

import styles from './MainVideo.module.scss'

export const MainVideo = () => {
    return (
        <section className={styles.container}>
            <VideoCard />
            <Description />
        </section>
    )
}
