import { Images } from "@components/constants";
import { Input } from "@ui/Input";



export const Header = () => {
    const { BurgerMenu, Logo, VideoIcon, Menu, Notification, Profile } = Images;
    return (
        <header>
            <button><img src={BurgerMenu} alt="menu" /></button>
            <img src={Logo} alt="logo" />
            <Input />
            <div className="profile_settings">
                <img src={VideoIcon} alt="" />
                <img src={Menu} alt="" />
                <div className="notification">
                    <img src={Notification} alt="" />
                    <p>3</p>
                </div>
                <img src={Profile} alt="" />
            </div>
        </header>
    )
}
