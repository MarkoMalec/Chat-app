import logo from '../../../logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className='brand'>
                <img src={logo} />
            </div>
        </header>
    )
}

export default Header;