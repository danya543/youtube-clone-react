import { CardProps } from "@src/types/types";

export const Card = (props: CardProps) => {
    const { header, img, author, views, duration } = props;
    return (
        <div className={''}>
            <img src={img} alt="poster" />
            <p>{duration}</p>
            <h3>{header}</h3>
            <div>
                <p>{views}k views</p>
                <p>{author}</p>
            </div>
        </div>
    )
}
