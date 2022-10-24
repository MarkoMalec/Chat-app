import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import logo from '../../../logo.svg';
import './Header.scss';


const Header = () => {
    const { user } = useContext(UserContext);
    return (
        <header>
            <div className='brand'>
                <img src={logo} />
            </div>
            <div className="personal_user_container">
            {user.username}
            </div>
        </header>
    )
}

export default Header;