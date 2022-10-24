import './productsDescription.css'

export const ProductsDescription = () => {
    return (
        <div className='productsDescription'>
            <div className='description'>
                <div className='amount'>10</div>
                <img src={require(`../../../assets/images/cafe.png`)} alt='' />
                <div className='info'>
                    <div className='title'><strong>{'Nmama'}&nbsp;</strong>{'- $1.50'}</div>
                    <div className='actions'>
                        <div className='plus'>+</div>
                        <div className='minus'>-</div>
                    </div>
                    <div className='summary'>{'wdwdwq'}</div>
                </div>
            </div>
        </div>
    )
}