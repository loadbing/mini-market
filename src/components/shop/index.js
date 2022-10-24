import { Cart } from "./cart"
import { Header } from "./header"
import { Products } from "./products"
import { ProductsDescription } from "./productsDescription"
import './shop.css'

export const Shop = () => {

    return (
        <div className="shop">
            <Header />
            <div className="content">
                <div className="leftContent">
                    <p>Store</p>
                    <Products />
                </div>
                <div className="rightContent">
                    {/* <p>Shopping cart</p>
                    <Cart /> */}
                    <p>Product</p>
                    <ProductsDescription />
                </div>
            </div>
        </div>
    )
}