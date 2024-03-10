
import { useState } from "react";

function Card(){

    let [empData,setEmpData]=useState([
    {
        id:1,
        name:'ABC',
        age:22
    },
    {
        id:2,
        name:'XYZ',
        age:30
    },
    {
        id:3,
        name:'PQR',
        age:28
    }])

    

    function handleDelete(id){
        let filterData=empData.filter((emp)=>emp.id!=id);
        setEmpData(filterData)
    }
    return( 
        <div >
            {empData.map((emp)=>(
                <div key={(emp.id)}>
                <h1>{emp.name}</h1>
                <h3>{emp.age}</h3>
                <button onClick={()=>handleDelete(emp.id)}>Delete</button>
                </div>
            ))

            }
        </div>
        
    )
}
export default Card;
    
