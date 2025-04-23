import { DescriptionInfo } from "@components/constants"

export const Description = () => {
    const { name, date, description } = DescriptionInfo
    return (
        <div>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}
