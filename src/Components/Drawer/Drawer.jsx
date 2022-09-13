import React from 'react';

export const Drawer = () => {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img className="removeBtn cu-p" src="/images/btn-remove.svg" alt="remove"/>
                </h2>
                <div className="cart">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{backgroundImage: 'url(/images/card/card1.jpg)'}}></div>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="remove"/>
                    </div>
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

