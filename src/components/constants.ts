import ChannelIcon from '@assets/channel_icon.png'
import Cherry from '@assets/cherry.png'
import Cone from '@assets/cone.png'
import BurgerMenu from '@assets/icons/burger_menu.svg'
import Dislikes from '@assets/icons/dislike.svg'
import DownArrow from '@assets/icons/down_arrow.svg'
import Home from '@assets/icons/home.svg'
import Library from '@assets/icons/lib.svg'
import Likes from '@assets/icons/like.svg'
import Logo from '@assets/icons/logo.svg'
import Menu from '@assets/icons/menu.svg'
import More from '@assets/icons/more.svg'
import Notification from '@assets/icons/notification.svg'
import Search from '@assets/icons/search.svg'
import Share from '@assets/icons/share.svg'
import Subscription from '@assets/icons/subscription.svg'
import Trend from '@assets/icons/trend.svg'
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
    Profile: Profile,
    Likes: Likes,
    Dislikes: Dislikes,
    More: More,
    Share: Share,
    ChannelIcon: ChannelIcon,
    Search: Search,
    DownArrow: DownArrow,
    Home: Home,
    Trend: Trend,
    Subscriptions: Subscription,
    Library: Library
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