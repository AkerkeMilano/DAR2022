import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './Navbar.scss';
import { user as newUser } from '../../mock'
import { StyledLogin, StyledLogout } from './Navbar.style';


const Navbar = () => {

    const { user, login, logout } = useContext(UserContext);
    const [expanded, setExpanded] = useState(false);

    const openUserProfile = () => {
        setExpanded(true);
    }
    const closeUserProfile = () => {
        setExpanded(false);
    }
    const loginUser = () => {
        login(newUser);
    }
    const logoutUser = () => {
        logout(null);
        closeUserProfile();
    }

    return (
        <nav className="Navbar">
            <div className="Navbar__menu">
                <a href="#home" className="menu_links">Movies</a>
                <a href="#home" className="menu_links">Cartoons</a>
                <a href="#home" className="menu_links">TV Shows</a>
                <a href="#home" className="menu_links">Series</a>
            </div>
            <StyledLogin isLogIn={!!user && user?.login}>
                <button className="login_btn" onClick={loginUser}>Login</button>
            </StyledLogin>
            <StyledLogout isLogOut={!!user && user?.login}>
                <div className="user_profile">
                    <img src={user?.avatar} alt="Avatar" className='user_img'/>
                    <div className="user_name" onClick={openUserProfile} onBlur={closeUserProfile}>
                        {user?.firstName + ' ' + user?.lastName + '  '}
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/chevron-down.png" alt='Icon' className='icon_img'/>
                        {expanded ? (           
                            <div className='show_profile'>
                                <ul className='profile_list'>
                                    <li>Profile</li>
                                    <li>
                                        <button className='logout_btn' onClick={logoutUser}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
      
            </StyledLogout>
            
        </nav>
    );
};

export default Navbar;
