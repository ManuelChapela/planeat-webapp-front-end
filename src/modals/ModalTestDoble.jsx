import React from 'react'
import { EditPass } from '../components/EditPass/EditPass'
import { HeaderNoLogo } from '../components/HeaderNoLogo/HeaderNoLogo'
import { InputModModalDoble } from '../components/InputModModal/InputModModalDoble'
import { InputModModal } from '../components/InputModModal/InputModModal'
import closeIcon from './../assets/closeIcon.svg'


export const ModalTestDoble = ({mainText, action1, action2, secondText, secondText2, leftBtn, rigthBtn, reset}) => {
    return (
        <div className="modal">
            
            <div className="modal-content">
                
                <div className="modal-header">
                    <img src={closeIcon} onClick={reset} alt="Cerrar pestaña"/>
                    <HeaderNoLogo text={secondText}/>
                </div>





                

                <div className="modal-body">

                    {/* 2 inputs aqui */}
                    {/* <InputModModal cssClass="input__style" text={secondText}/>
                    <h3>{secondText2}</h3>
                    <EditPass cssClass="input__style" text={leftBtn} text2={rigthBtn} /> */}

                    <InputModModalDoble cssClass="input__style" text1={mainText} text2={secondText2}/>

                    <div>
                        <button onClick={action1}>{leftBtn}</button>
                        <button onClick={action2}> {rigthBtn}</button>
                    </div>
                   

                </div>
            </div>
            
        </div>
    )
}
