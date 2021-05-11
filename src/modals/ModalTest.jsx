import React from 'react'
import { EditPass } from '../components/EditPass/EditPass'
import { HeaderNoLogo } from '../components/HeaderNoLogo/HeaderNoLogo'
import { InputModModal } from '../components/InputModModal/InputModModal'
import closeIcon from './../assets/closeIcon.svg'


export const ModalTest = ({mainText, action, secondText, leftBtn, rigthBtn, reset, action1, action2}) => {
    return (
        <div className="modal">
            
            <div className="modal-content">
                
                <div className="modal-header">
                    <img src={closeIcon} onClick={reset} alt="Cerrar pestaña"/>
                    <HeaderNoLogo text={mainText}/>
                </div>

                {/* <div className="modal-body">
                    <h3>{secondText}</h3>
                    <EditPass text={leftBtn} text2={rigthBtn} />
                </div> */}

            <InputModModal cssClass="input__style" text1={mainText} text2={secondText}/>



            <div>
                <button onClick={action1}>{leftBtn}</button>
                <button onClick={action2}> {rigthBtn}</button>
            </div>
               

            </div>
            
        </div>
    )
}
