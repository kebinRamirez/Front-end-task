import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <div className="header">
            {props.isMobile ? (
                <div className='sub-header'>
                    <div className='img-logo-mobile'>
                        <div className="img-container">
                            <img className="cart-bag" src="https://res.cloudinary.com/dhejcruqm/image/upload/v1666823588/shopping-bag_psqkoh.png" />
                        </div>
                        <div className="logo-name">Store</div>
                    </div>
                    <div className='cart-container-mobile'>
                        <div className="button color-container" onClick={() => props.setCartActive(true)}>
                            <div className="flexx">
                                <img className="cart-img" src="https://res.cloudinary.com/dhejcruqm/image/upload/v1666825858/shopping-cart_n7npob.png" />
                            </div>
                            <div className="price-styleer">
                                {props.calculateCart}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="sub-header">
                    <div className="img-logo">
                        <div className="img-container">
                            <img className="cart-bag" src="https://res.cloudinary.com/dhejcruqm/image/upload/v1666823588/shopping-bag_psqkoh.png" />
                        </div>
                        <div className="logo-name">Store</div>
                    </div>
                    <div className="cart-container">
                        <div className="button color-container" onClick={() => props.setCartActive(true)}>
                            <div className="flexx">
                                <img className="cart-img" src="https://res.cloudinary.com/dhejcruqm/image/upload/v1666825858/shopping-cart_n7npob.png" />
                            </div>
                            <div className="price-styleer">
                                {props.calculateCart}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        calculateCart: state.shop.calculateCart,
    };
}
export default connect(mapStateToProps)(Header);