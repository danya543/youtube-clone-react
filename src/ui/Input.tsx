
import { InputProps } from '@src/types/types'

import styles from './ui.module.scss'

export const Input = (props: InputProps) => {
    const { type, placeholder, classname } = props;
    return (
        <input type={type} placeholder={placeholder} className={`${classname ? classname : ''} ${styles.button}`} />
    )
}
