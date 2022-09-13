import React from 'react';

export const Card = () => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/images/favorites-inactive.svg" alt="heart"/>
            </div>
            <img width={133} height={122} src="/images/card/card1.jpg" alt="card"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена :</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/images/card/plus.svg" alt="plus"/>

                </button>
            </div>
        </div>
    );
};


