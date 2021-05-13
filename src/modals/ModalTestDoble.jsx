import React,{useState} from 'react'
import { EditPass } from '../components/EditPass/EditPass'
import { HeaderNoLogo } from '../components/HeaderNoLogo/HeaderNoLogo'
import { InputModModalDoble } from '../components/InputModModal/InputModModalDoble'
import { InputModModal } from '../components/InputModModal/InputModModal'
import closeIcon from './../assets/closeIcon.svg'


export const ModalTestDoble = ({mainText, action1, action2, secondText, secondText2, leftBtn, rigthBtn, reset}) => {
    

    const [pass, setPass] = useState()
    const [newPass, setNewPass] = useState()

    const testNewPass = () => action2(newPass);
    const errorPass = () => console.log("Ha habido un error con las contraseñas");

    // Set de contraseña 1 y contraseña 2
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    const handleChangeNewPass = (e) => {
        setNewPass(e.target.value)
    }

console.log("3", newPass);
    // const newPass = () => {}
   
    return (
        <div className="modal">
            
            <div className="modal-content">
                    
                <div className="modal__closeBtn-header">
                    <img src={closeIcon} onClick={reset} alt="Cerrar pestaña"/>
                </div>
                
                <div className="modal-header">
                    <HeaderNoLogo text={secondText}/>
                </div>

                <div className="modal-body">
                    <InputModModalDoble 
                            cssClass="input__style" 
                            text1={mainText} 
                            text2={secondText2}
                            handleChangePass={handleChangePass} 
                            handleChangeNewPass={handleChangeNewPass}
                            />
                </div>

                <div className="modal-footer">
                    <img src={leftBtn} alt="Borrar" onClick={action1}/>
                    <img src={rigthBtn} alt="Modificar" onClick={pass === newPass ? testNewPass : errorPass}/>
                </div>
            </div>
        </div>
    )
}
