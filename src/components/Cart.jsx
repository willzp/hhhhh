export default function Cart({ userInfo, setLoginStatus, totalPrice, nbrOfItemsInCart}) {
    const name = userInfo;
    const price = totalPrice;
    const items = nbrOfItemsInCart;

    function logout(){
        setLoginStatus(false)
    }

    function purchase(){
        alert("Thank you for the purchase!");
        logout();
    }

    return (
        <>
           <h1>Welcome to the cart {name}!</h1>
           <br/>
           <h1>Total price: {price}$</h1>
           <h1>Number of items in cart: {items}</h1>
           <button onClick={purchase}>Purchase</button>
           <button onClick={logout}>log out</button>
        </>
    )
}