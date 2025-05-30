export interface CardProps {
    header: string;
    img: string;
    views: number;
    author: string;
    duration: string;
}

export interface ButtonProps {
    text?: string;
    onclick?: () => void;
    classname?: string;
    image?: string;
}
export interface InputProps {
    type: 'password' | 'text',
    placeholder?: string,
    classname?: string
}