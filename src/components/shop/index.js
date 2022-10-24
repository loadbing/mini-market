import { useSelector } from "react-redux"
import { Cart } from "./cart"
import { Header } from "./header"
import { Products } from "./products"
import { ProductsDescription } from "./productsDescription"
import './shop.css'

export const Shop = () => {
    const isShowCart = useSelector(store => store.header.isShowCart)

    return (
        <div className="shop">
            <Header />
            <div className="content">
                <div className="leftContent">
                    <p>Store</p>
                    <Products />
                </div>
                <div className="rightContent">
                    {isShowCart ? <>
                        <p>Shopping cart</p>
                        <Cart />
                    </> : <>
                        <p>Product</p>
                        <ProductsDescription />
                    </>
                    }
                </div>
            </div>
        </div>
    )
}