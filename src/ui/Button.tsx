import { ButtonProps } from "@src/types/types"

import styles from './ui.module.scss'

export const Button = (props: ButtonProps) => {
    const { text, onclick, classname, image } = props;
    return (
        <button onClick={onclick} className={`${classname ? classname : ''} ${styles.button}`}>{text ? text : <img src={image} />}</button>
    )
}
