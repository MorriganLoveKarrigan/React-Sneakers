import React from 'react';

export const Header = (props) => {
    const {price,onOpen} = props
    return (
        <header className="d-flex align-center justify-between p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/images/sneakers-logo.png" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={onOpen} className="mr-30 cu-p">
                    <img width={18} height={18} alt="cart" src="/images/cart.svg"/>
                    <span>{price} руб</span>
                </li>
                <li>
                    <img alt="user" src="/images/profile.svg"/>
                </li>
            </ul>
        </header>
    );
};

