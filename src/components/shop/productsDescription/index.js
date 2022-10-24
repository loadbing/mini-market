import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../../../features/cart/cartSlice";
import { formatPrice } from '../../../utils/utils';
import './productsDescription.css'

export const ProductsDescription = () => {
    const product = useSelector((state) => state.products.selected);
    const items = useSelector(state => state.cart.elements);

    const dispatch = useDispatch();

    const getAmount = () => {
        const item = items && items.find(it => it.id === product.id);
        return item && item.total ? item.total : 0
    }

    const onClick = (value) => {
        const fn = value ? add : remove;
        dispatch(fn(product));
    }

    return (
        <div className='productsDescription'>
            {product && product.title && (<div className='description'>
                <div className='amount'>{getAmount()}</div>
                <img src={require(`../../../assets/images/${product.img}`)} alt='' />
                <div className='info'>
                    <div className='title'><strong>{product.title}&nbsp;</strong>&bull;{` $${formatPrice(product.price)}`}</div>
                    <div className='actions'>
                        <div className='plus' onClick={() => onClick(true)}>+</div>
                        <div className='minus' onClick={() => onClick(false)}>-</div>
                    </div>
                    <div className='summary'>{product.description}</div>
                </div>
            </div>)}
        </div>
    )
}