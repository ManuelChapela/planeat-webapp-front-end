import React, {useState} from 'react'

export const InputModModalDoble = ({text1, text2, type, inputChange, cssClass, placeholder}) => {

    const [pass, setPass] = useState()
    const [newPass, setNewPass] = useState()

  

const handleChangePass = (e) => {
    console.log(e.target.value);
    setPass(e.target.value)
}
const handleChangeNewPass = (e) => {
    console.log(e.target.value);
    setNewPass(e.target.value)
}



console.log("pass", pass);
console.log("newPass", newPass);

    return (
        <div className={cssClass} >
            <h4>{text1}</h4>
            <input placeholder={placeholder} type={type} onChange={handleChangePass}/>
           
            <h4>{text2}</h4>
            <input placeholder={placeholder} type={type} onChange={handleChangeNewPass}/>
        </div>
    )
}


