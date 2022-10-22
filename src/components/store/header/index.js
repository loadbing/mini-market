import './header.css';
import logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className='btnCart'>
                <div className='priceCart'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {' $25.50'}
                </div>
                <div className='closeCart'>x</div>
            </div>
        </div>
    )
}