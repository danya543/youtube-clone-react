import Cherry from '@assets/cherry.png'
import Cone from '@assets/cone.png'
import BurgerMenu from '@assets/icons/burger_menu.svg'
import Logo from '@assets/icons/logo.svg'
import Menu from '@assets/icons/menu.svg'
import Notification from '@assets/icons/notification.svg'
import Video from '@assets/icons/video.svg'
import Orange from '@assets/orange.png'
import Pineapple from '@assets/pineapple.png'
import Profile from '@assets/profile_icon.png'
import Watermelon from '@assets/watermelon.png'
import { CardProps } from '@src/types/types'

export const Images = {
    BurgerMenu: BurgerMenu,
    Logo: Logo,
    Watermelon: Watermelon,
    Cherry: Cherry,
    Orange: Orange,
    Pineapple: Pineapple,
    Cone: Cone,
    Notification: Notification,
    Menu: Menu,
    VideoIcon: Video,
    Profile: Profile
}

export const CardsInfo: CardProps[] = [
    {
        header: 'Baby Monitor Technology',
        img: Images.Cone,
        author: 'Dollie Blair',
        views: 123,
        duration: '8:00'
    },
    {
        header: 'A Good Autoresponder',
        img: Images.Cherry,
        author: 'Dollie Blair',
        views: 123,
        duration: '8:00'
    },
    {
        header: 'Selecting The Right Hotel',
        img: Images.Pineapple,
        author: 'Dollie Blair',
        views: 123,
        duration: '8:00'
    },
    {
        header: 'A Good Autoresponder',
        img: Images.Orange,
        author: 'Dollie Blair',
        views: 123,
        duration: '8:00'
    },
    {
        header: 'A Good Autoresponder',
        img: Images.Watermelon,
        author: 'Dollie Blair',
        views: 123,
        duration: '8:00'
    }
]

export const VideoCardInfo = {
    video: '',
    header: 'Dude You Re Getting A Telescope',
    likes: 123,
    dislikes: 435,
    views: 123,
}

export const DescriptionInfo = {
    name: 'Food & Drink',
    date: '14 Jun 2019',
    description: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. '
}