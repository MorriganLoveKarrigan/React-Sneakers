import React from 'react';

export const Drawer = (props) => {

return (
        <div className="overlay" onClick={props.onClose}>
            <div className="drawer" onClick={e => e.stopPropagation()}>
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={props.onClose} className="removeBtn cu-p" src="/images/btn-remove.svg" alt="close"/>
                </h2>
                <div className="items">
                    {props.cartItems.map((item)=> (
                        <div className="cart" key={item.name + item.id}>
                            <div className="cartItem d-flex align-center mb-20">
                                <div className="cartItemImg" style={{backgroundImage: `url(${item.path})`}}></div>
                                <div className="mr-20">
                                    <p className="mb-5">{item.name}</p>
                                    <b>{item.price}</b>
                                </div>
                                <img onClick={() =>props.removeFromCart(item)} className="removeBtn" src="/images/btn-remove.svg" alt="remove"/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cartFooter">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <div className="greenButton">
                        <button>Оформить заказ <img src="/images/right-arrow-svgrepo-com.svg" alt="arrow"/></button>

                    </div>
                </div>

            </div>
        </div>
    );
};

