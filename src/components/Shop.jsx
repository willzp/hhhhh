import pic from "../img/headset.webp";
import pic2 from "../img/mouse.webp";
import pic3 from "../img/mousepad.webp";
import pic4 from "../img/keyboard.jpeg";
import pic5 from "../img/headset2.jpeg";
import { useState } from "react";

export default function Info({userInfo, setLoginStatus, setIsInCart, totalPrice, nbrOfItemsInCart}){
    const name = userInfo;
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totPrice, setTotPrice] = useState(0);
    const [nbrHeadset, setNbrHeadset] = useState(0);
    const [nbrMouse, setNbrMouse] = useState(0);
    const [nbrMousepad, setNbrMousepad] = useState(0);
    const [nbrKeyboard, setNbrKeyboard] = useState(0);
    const [nbrHeadset2, setNbrHeadset2] = useState(0);
    
    function logout(){
        setLoginStatus(false)
    }
    
    function goToCart(){
       setIsInCart(true);
       totalPrice(totPrice);
       nbrOfItemsInCart(itemsInCart);
    }

    function AddToCart(price, amount) {
        setTotPrice(totPrice + (price * amount));
        setItemsInCart(itemsInCart + amount);
    }

    function handleHeadsetChange(event) {
        setNbrHeadset(event.target.valueAsNumber);
    }

    function handleMouseChange(event) {
        setNbrMouse(event.target.valueAsNumber);
    }

    function handleMousepadChange(event) {
        setNbrMousepad(event.target.valueAsNumber);
    }

    function handleKeyBoardChange(event) {
        setNbrKeyboard(event.target.valueAsNumber);
    }

    function handleHeadset2Change(event) {
        setNbrHeadset2(event.target.valueAsNumber);
    }
    
    return(
        <>
            <h1>Welcome {name}!</h1>
           
            <button onClick={logout}>log out</button>
            <button onClick={goToCart}>go to cart ({itemsInCart})</button>
          
            <div id="headset"> 
            <img src={pic} width={250}/>
            <h2>Gaming headset</h2>
            <h3>Price: 150$</h3> 
            <button onClick={() => AddToCart(150, nbrHeadset)}>Add to cart </button>
            <input type="number" onChange={handleHeadsetChange}></input>
            </div>

            <div id="mouse">
            <img src={pic2} width={250}/>
            <h2>Gaming mouse</h2>
            <h3>Price: 100$</h3>
            <button onClick={() => AddToCart(100, nbrMouse)}>Add to cart</button>
            <input type="number" onChange={handleMouseChange}></input>
            </div>
            
            <div id="mousepad">
            <img src={pic3} width={250}/>
            <h2>Gaming mouse pad</h2>
            <h3>Price: 20$</h3>
            <button onClick={() => AddToCart(20, nbrMousepad)}>Add to cart</button>
            <input type="number" onChange={handleMousepadChange}></input>
            </div>

            <div id="keyboard">
            <img src={pic4} width={250}/>
            <h2>Gaming keyboard</h2>
            <h3>Price: 150$</h3>
            <button onClick={() => AddToCart(150, nbrKeyboard)}>Add to cart</button>
            <input type="number" onChange={handleKeyBoardChange}></input>
            </div>

            <div id="headset2">
            <img src={pic5} width={250}/>
            <h2>Gaming headset</h2>
            <h3>Price: 150$</h3>
            <button onClick={() => AddToCart(150, nbrHeadset2)}>Add to cart</button>
            <input type="number" onChange={handleHeadset2Change}></input>
            </div>
        </>
    )
}