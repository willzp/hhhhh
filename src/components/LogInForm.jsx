import { useState } from "react";

export default function NameForm({changeUserInfo}) {
    let name = '';
    const [stateName, setStateName] = useState('');

    function handleClick(event) {
        event.preventDefault();
        setStateName(name);
        changeUserInfo(name);
    }

    function handleChange(event) {
        name = event.target.value;
        console.log(event.target.value);
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Log in</button>
            </form>
        </>
    )
}