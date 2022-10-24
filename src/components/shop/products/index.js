import { useSelector } from 'react-redux'
import './products.css'

export const Products = () => {
    const items = useSelector((state) => state.products);

    return (
        <div className="products">
            {items && items.length && items.map((item) =>
                <div className='product'>
                    <img src={require(`../../../assets/images/${item.img}`)} alt={item.title} />
                </div>
            )}
        </div>
    )
}