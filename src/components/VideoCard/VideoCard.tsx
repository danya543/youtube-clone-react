import { VideoCardInfo } from "@components/constants"

export const VideoCard = () => {
    const { header, likes, dislikes, views, video } = VideoCardInfo;
    return (
        <div>
            <video src={video}></video>
            <h3>{header}</h3>
            <p>{likes}</p>
            <p>{dislikes}</p>
            <p>{views}</p>
        </div>
    )
}
