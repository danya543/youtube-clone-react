import { ButtonProps } from "@src/types/types"

import './ui.module.scss'

export const Button = (props: ButtonProps) => {
    const { text, onclick, classname, image } = props;
    return (
        <button onClick={onclick} className={classname ? classname : ''}>{text ? text : <img src={image} />}</button>
    )
}
