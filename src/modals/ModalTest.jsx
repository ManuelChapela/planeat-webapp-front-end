import React, {useState} from 'react'
import { EditPass } from '../components/EditPass/EditPass'
import { HeaderNoLogo } from '../components/HeaderNoLogo/HeaderNoLogo'
import { InputModModal } from '../components/InputModModal/InputModModal'
import closeIcon from './../assets/closeIcon.svg'


export const ModalTest = ({mainText, action, secondText, leftBtn, rigthBtn, reset, action1, action2, action3}) => {
    
    const [newName, setNewName] = useState()

    const handleChange = (e) => { setNewName(e.target.value)}
    const testNewName = () => action2(newName);
    
    
    return (
        <div className="modal">
            
            <div className="modal-content">

                <div className="modal__closeBtn-header">
                    <img src={closeIcon} onClick={reset} alt="Cerrar pestaña"/>
                </div>
                
                <div className="modal-header" >
                    <HeaderNoLogo text={mainText}/>
                </div>
            
                <div className="modal-body">
                    <InputModModal cssClass="input__style" text1={mainText} text={secondText} handleChange={handleChange}/>
                </div>

                <div className="modal-footer">
                    <img src={leftBtn} alt="Modificar" onClick={action1}/>
                    <img src={rigthBtn} alt="Enviar" onClick={testNewName} />
                </div>
            </div>
        </div>
    )
}
