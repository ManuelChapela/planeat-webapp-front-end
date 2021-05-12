import React, {useState} from 'react'

export const InputModModal = ({text, type, inputChange, cssClass, placeholder, handleChange}) => {

//     const [newName, setNewName] = useState()

  

// const handleChange = (e) => {
//     console.log(e.target.value);
//     setNewName(e.target.value)
// }

// console.log("newName", newName);

    return (
        <div >
            <h4>{text}</h4>
            <input className={cssClass} placeholder={placeholder} type={type} onChange={handleChange} />
        </div>
    )
}


