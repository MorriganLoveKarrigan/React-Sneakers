import {Card} from "./components/Card";
import {Header} from "./components/Header/Header";
import {Drawer} from "./components/Drawer/Drawer";
import {useEffect, useState} from "react";
import {addToCart,removeFromCart,getCartItems} from "./requests/cart";
import {getProducts} from "./requests/products";

function App() {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [price, setPrice] = useState(0);

    useEffect( () => {
         getItems()
         getCartCards()
    }, []);

    const getItems = async () => {
        let response = await getProducts()
        setProducts([...response])
    }

    const getCartCards = async () => {
        let response = await getCartItems()
        setCartItems([...response])
    }
    const addToCartItem = async (obj) => {
        console.log(cartItems.find(item => JSON.stringify(item) === JSON.stringify(obj)))
        const response = await addToCart(obj)
        setCartItems((old) => [...old, response])
    }
    const removeItemFromCart = async (item) => {
        let filtered = cartItems.filter((el) => el.id !== item.id)
        setCartItems([...filtered])
        await removeFromCart(item)
    }
    return (
        <div className="wrapper clear">
            {open && <Drawer
                cartItems={cartItems}
                onClose={() => setOpen(false)}
                removeFromCart={removeItemFromCart}
            />}
            <Header onOpen={() => setOpen(true)} price={price}/>
            <div className="content p-40 ">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="/images/search.svg" alt="search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {products.map((items) => {
                        return <Card
                            key={items.id}
                            name={items.name}
                            price={items.price}
                            path={items.image}
                            id={items.id}
                            onPlus={(obj) => addToCartItem(obj)}
                            onFavorite={() => console.log("2")}
                            removeItemFromCart={(obj) => removeItemFromCart(obj)}
                        />

                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
