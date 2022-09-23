import React, {useState} from 'react';
import styles from './Card.module.scss'

export const Card = (props) => {
    const {name, price, path,id,onPlus,removeItemFromCart} = props
    const [checked, setChecked] = useState(false);

    const isChecked = () => {
        if(!checked) onPlus({name, price, path, id})
        setChecked(!checked)
    }


    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/images/favorites-inactive.svg" alt="heart"/>
            </div>
            <img width={133} height={122} src={path} alt="card"/>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена :</span>
                    <b>{price}</b>
                </div>
                <button className={styles.button} onClick={isChecked}>
                    <img
                    src={checked ? "images/card/checked.svg" : "/images/card/plus.svg"}
                    alt="plus"
                />
                </button>
            </div>
        </div>
    );
};


