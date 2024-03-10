import { useState } from "react";

function MyCart() {
    let [cartCount,func]=useState(5);

    function handleClick() {
        func(cartCount+1);
    }

    function clickHandle() {
        func(cartCount-1)
    }
    return (
        <>
        <h1>My Cart</h1>
        <h2>{cartCount}</h2>
        <div className="main">
        <button onClick={handleClick}>+</button>
        <button onClick={clickHandle}>-</button>
        </div>
        

        </>
    );
}

export default MyCart