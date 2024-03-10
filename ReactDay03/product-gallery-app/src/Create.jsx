import { useState } from "react";

const Create = () => {
    let [isClicked , setIsClicked] =useState(false);

    let [passwordType  , setPasswordType] = useState('password')

    let [name , setName] = useState('')

    let [price , setPrice] = useState(0)

    let [desc , setDesc] = useState('')

    let [image , setImage] = useState('')

    let [category , setCategory] = useState('')

    const changePasswordType = () => {
        if(passwordType === 'password')
        {
            setPasswordType('text');
        }
        else if(passwordType === 'text')
        {
            setPasswordType('password');
        }
    }
    const changeVisibility = () => {
        setIsClicked(!isClicked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: name,
                    price: price,
                    description: desc,
                    image: image,
                    category: category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        
    };

    return(
        <>
        <div className="create-container">
        <h1 className="create-heading">Create</h1>
        <button className="create-button" onClick={changeVisibility}>+</button></div>
        {isClicked && (

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-container" >
                        <label className="label-text">Product Name:
                        </label>
                        <input 
                        type={name} 
                        onChange={(event) => setName(event.target.value)} 
                        />
                    </div>

                    <div className = 'input-container'>
                        <label className="label-text">Product Price</label>
                        <input
                            type='number'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)} />
                    </div>

                    <div className = 'input-container'>
                        <label className="label-text">Product Description</label>
                        <input
                            type='text'
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}></input>
                    </div>

                    <div className = 'input-container'>
                        <label className="label-text">Product Image</label>
                        <input
                            type='text'
                            value={image}
                            onChange={(event) => setImage(event.target.value)}></input>
                    </div>

                    <div className = 'input-container'>
                        <label className="label-text">Product Category</label>
                        <select onChange={(event) => setCategory(event.target.value)}>
                            <option value="Electronics">Electronics</option>
                            <option value="Toys">Toys</option>
                            <option value="Medical">Medical</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                        
                            
                    </div>
            
                    <label for="password">Password:</label>
                    <input 
                        type={passwordType} 
                        id="password" 
                        name="password" 
                        placeholder="Enter password" 
                    />
                    <button onClick={changePasswordType}>show</button><br/>

                    <button type="submit" className="create-btn">
                        Submit
                    </button>
                </form>
            </div>
        )}
        
        </>
        
    )

}

export default Create