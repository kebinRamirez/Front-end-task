import React from 'react'
import "../App.css"
import "../styles/webPageStyles.css"
import { connect } from 'react-redux'
import { addToCart, setCurrentItem, calculateCartr, removeFromCart } from '../redux/shopping/shopping-actions';
import { Helmet } from 'react-helmet'

function WebPage(props) {

    return (
        <div className='contenedor'>
            <div className='contenedor-items' >
                {props.products.map((item, index) => {
                    return <button className="card button" key={item.id} onClick={() => {
                        props.setCurrentItem(item);
                        props.setCartActive(false);
                    }}>
                        <img className='image' src={item.image} />
                    </button>
                })}
            </div>
            <div className='banner'>
                {!props.cartActive ? (
                    props.currentItem == null ? (
                        <div className='text-product'>
                            Please choose a product on the left.
                        </div>
                    ) : (
                        <div className='sub-banner'>
                            <div className='title'>Product</div>
                            <div className='row-image'>
                                <div className='quantity-item'>
                                    <div className='circle'>{props.quantitySelectedItem}</div>
                                </div>
                                <div className='image-item'>
                                    <img className='imagee' src={props.currentItem.image} />
                                </div>
                            </div>
                            <div className='flexxs'>
                                <div className='flexx'>
                                    <div className='product-title'>
                                        {props.currentItem.itemName}
                                    </div>
                                    <div className='point'>
                                        {' . '}
                                    </div>
                                    <div className='price-style'>
                                        {"$"}{props.currentItem.price}
                                    </div>
                                </div>
                                <div className='flexx'>
                                    <button className='button minus' onClick={() => {
                                        var before = props.quantitySelectedItem
                                        if (before > 1) {
                                            before = before - 1
                                            props.setQuantitySelectedItem(before)
                                        }
                                    }}>
                                        -
                                    </button>
                                    <button className='button plus' onClick={() => {
                                        var before = props.quantitySelectedItem
                                        var before = before + 1
                                        props.setQuantitySelectedItem(before)
                                    }}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='line' />
                            <div className='description'>
                                {props.currentItem.description}
                            </div>
                            <div className='line' />
                            <div className='center-button'>
                                <button className='button-style button' onClick={() => {
                                    props.addToCart(props.currentItem?.id, props.quantitySelectedItem);
                                    props.calculateCartr();
                                    props.setQuantitySelectedItem(1);
                                }}>
                                    add to cart
                                </button>
                            </div>



                        </div>
                    )
                ) : (
                    <div className='sub-banner'>
                        <div className='title'>Shopping cart</div>
                        {props.cart.length == 0 ? (
                            <div className='empty-container'>
                                <img src="https://res.cloudinary.com/dhejcruqm/image/upload/v1666887509/empty-cart_knam7w.png" className='image' />
                                <div className='text-empty'>Your cart is empty</div>

                            </div>
                        ) : (
                            <div>
                                {props.cart.map((item) => {
                                    return <div className='card-cart'>
                                        <div className='q-cont'>
                                            <div className='circle'>
                                                {item.qty}
                                            </div>
                                        </div>
                                        <div className='img-cont'>
                                            <img src={item.image} className="cart-image" />
                                        </div>
                                        <div className='button-cont'>
                                            <button className='button-styler button' onClick={() => {
                                                //onClick actions
                                                props.removeFromCart(item.id)
                                                props.calculateCartr();
                                            }}>
                                                remove
                                            </button>
                                        </div>
                                    </div>
                                })}
                                <div className='right'>
                                    <div className='total-style'>
                                        Total:
                                    </div>
                                    <div className='total-price-style'>
                                        {"$"}{props.calculateCart}
                                    </div>
                                </div>
                                <div className='try'>
                                    <form>
                                        <Helmet>
                                            <script
                                                src="https://checkout.wompi.co/widget.js"
                                                data-render="button"
                                                data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
                                                data-currency="USD"
                                                data-amount-in-cents={props.calculateCart}
                                                data-reference="4XMPGKWWPKWQ"
                                            >
                                            </script>
                                        </Helmet>
                                    </form>
                                </div>

                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
        currentItem: state.shop.currentItem,
        cart: state.shop.cart,
        calculateCart: state.shop.calculateCart
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, qt) => dispatch(addToCart(id, qt)),
        setCurrentItem: (item) => dispatch(setCurrentItem(item)),
        calculateCartr: () => dispatch(calculateCartr()),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebPage);