import { useDispatch, useSelector } from 'react-redux'
import { selectProduct } from "../../../features/products/productsSlice";
import { showCart } from "../../../features/header/headerSlice";
import './products.css'
import { useEffect, useState } from 'react';

export const Products = () => {
    const [isActive, setIsActive] = useState({});
    const items = useSelector((state) => state.products.items);
    const itemsCart = useSelector(state => state.cart.elements);
    const isShowCart = useSelector(store => store.header.isShowCart);
    const dispatch = useDispatch();

    useEffect(() => {
        isShowCart && setIsActive({});
    }, [isShowCart]);

    const getAmount = (item) => {
        const value = itemsCart && itemsCart.find(it => it.id === item.id);
        return value && value.total ? value.total : 0;
    }

    const onClick = (item) => {
        dispatch(selectProduct(item))
        dispatch(showCart(true))
        setIsActive({ [item.id]: !isActive[item.id] });
    }

    return (
        <div className="products">
            {items && items.length && items.map((item, index) =>
                <div className={`product ${isActive[item.id] ? 'active' : ''}`} key={index} onClick={() => onClick(item)}>
                    {isActive[item.id] && (<div className='amount1'>{getAmount(item)}</div>)}
                    <img src={require(`../../../assets/images/${item.img}`)} alt={item.title} />
                </div>
            )}
        </div>
    )
}