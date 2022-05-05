import ReactDOM from"react-dom/client";
import {useState} from "react";
import LogInForm from "./components/LogInForm";
import Shop from "./components/Shop";
import Cart from "./components/Cart"
function App(){
    const [userInfo, setUserInfo] = useState({});
    const [LoggedIn, setLoggedIn] = useState(false);
    const [ifInCart, setIfInCart] = useState(false);
    const [price, setPrice] = useState({});
    const [itemsInCart, setItemsInCart] = useState({});

    function changeUserInfo(newInfo){
        setUserInfo(newInfo);
        setLoggedIn(true);
    }
    function setLoginStatus(status){
        setLoggedIn(status);
        setIfInCart(false);
    }
    function setIsInCart(inCart){
        setIfInCart(inCart);
    }

    function setTotalPrice(totalPrice){
        setPrice(totalPrice);
        console.log(totalPrice);
    }

    function setNbrOfItemsInCart(nbr){
        setItemsInCart(nbr);
    }

    function Render(){
        if(LoggedIn){
            if(ifInCart){
               return <Cart userInfo={userInfo} setLoginStatus={setLoginStatus} totalPrice={price} nbrOfItemsInCart={itemsInCart}/>;
            }
            else{
                return <Shop userInfo={userInfo} setLoginStatus={setLoginStatus} setIsInCart={setIsInCart} totalPrice={setTotalPrice} nbrOfItemsInCart={setNbrOfItemsInCart}/>;
            }
        }
        else{
            return <LogInForm changeUserInfo={changeUserInfo} />;
        }
    }

    return (
        <>
            <Render/>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);