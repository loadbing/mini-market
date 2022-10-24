import logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { showCart } from "../../../features/header/headerSlice";

import './header.css';
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../../utils/utils";

export const Header = () => {
    const { isShowCart } = useSelector(store => store.header);
    const price = useSelector(store => store.cart.price);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(showCart())
    }

    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className='btnCart' onClick={() => onClick()}>
                <div className='priceCart'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {` $${formatPrice(price)}`}
                </div>
                {isShowCart && <div className='closeCart'>x</div>}
            </div>
        </div>
    )
}