
import './ui.module.scss'

export const Input = ({ type, placeholder, classname }: {
    type: 'password' | 'text',
    placeholder?: string,
    classname?: string
}) => {
    return (
        <input type={type} placeholder={placeholder} className={classname} />
    )
}
