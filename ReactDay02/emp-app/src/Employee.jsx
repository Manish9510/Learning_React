import {useState}  from "react";

function Employee(){

    let[empDetails,func]=useState(emp_details);

    let emp_details = [
        {
            id:1,
            name:'ABC',
            role:'Developer'
        },
        {
            id:2,
            name:'DEF',
            role:'Tester'
        },
        {
            id:3,
            name:'GHI',
            role:'Manager'
        },
        {
            id:4,
            name:'JKL',
            role:'Developer'
        },
        {
            id:5,
            name:'MNO',
            role:'Tester'
        }
    ];

    

    function Delete(id) {

        let filtered_details=emp_details.filter((emp) => emp.id != id);
          console.log(filtered_details)
    }

    return (
        <>
            {empDetails.map((emp) => (
                <div key={emp.id}>
                    <h1>{emp.id}</h1>
                    <p>{emp.name}</p>
                    <p>{emp.role}</p>
                    <button onClick={()=>Delete(emp.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default Employee;