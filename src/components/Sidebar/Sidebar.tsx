import { Card } from "@components/Card/Card";
import { CardsInfo } from "@components/constants";

export const Sidebar = () => {
    return (
        <aside>
            {CardsInfo.map((item, index) => <Card author={item.author} views={item.views} img={item.img} header={item.header} duration={item.duration} key={index} />)}
        </aside>
    )
}
