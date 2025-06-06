import { Images, VideoCardInfo } from "@components/constants"

import styles from './VideoCard.module.scss'

export const VideoCard = () => {
    const { header, likes, dislikes, views } = VideoCardInfo;
    const { Likes, Dislikes, More, Share, DownArrow } = Images;
    return (
        <section className={styles.container}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Y71HbjGtrLM?si=WuOT6hjlDvtQ0Qvh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className={styles.info}>
                <div className={styles.header_info}>
                    <h3>{header}</h3>
                    <img src={DownArrow} alt="" />
                </div>
                <p>{views}k views</p>
                <div className={styles.stats}>
                    <button><img src={Likes} alt="like" />{likes}k</button>
                    <button><img src={Dislikes} alt="dislike" />{dislikes}k</button>
                    <button><img src={Share} />Share</button>
                    <button><img src={More} alt="menu" /></button>
                </div>
            </div>
        </section>
    )
}
