import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { formatPrice } from '../../../utils/utils';
import './cart.css'

export const Cart = () => {
    const { elements, price } = useSelector(state => state.cart);
    const html = useRef();

    useEffect(() => {
        if (price > 0) {
            localStorage.setItem('cart', JSON.stringify({ elements, price }));
            const script = `
            <script type="text/javascript" 
                src="https://checkout.wompi.co/widget.js" 
                data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf" 
                data-currency="COP" 
                data-amount-in-cents=${price}00 
                data-reference="ZBGV6GLYTKYJ" 
                data-redirect-url="https://transaction-redirect.wompi.co/check" 
                data-render="button">
            </script>`;
            const parsedHTML = document.createRange().createContextualFragment(script);
            html.current.appendChild(parsedHTML);
        }
    }, [elements, price]);

    return (
        <div className='cart'>
            {elements && elements.map((item, index) => item && item.id && (
                <div className='item' key={index}>
                    <div className='total'>{item.total}</div>
                    <img src={require(`../../../assets/images/${item.img}`)} alt={item.title} />
                </div>
            ))}
            <div className='price'><strong>Total:</strong> ${formatPrice(price)}</div>
            <form ref={html} />
        </div >
    )
}