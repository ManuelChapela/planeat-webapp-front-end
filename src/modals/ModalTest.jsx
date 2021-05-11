import React from 'react'
import logo from './../assets/img/random1.jpg'
import { Header } from '../components/Header/Header'
import { EditPass } from '../components/EditPass/EditPass'
import { BtnMainIcons } from '../components/BtnMainIcons/BtnMainIcons'
import { HeaderNoLogo } from '../components/HeaderNoLogo/HeaderNoLogo'
import {CloseIcon} from '@material-ui/icons/Close';

export const ModalTest = ({mainText, action, secondText, leftBtn, rigthBtn, reset}) => {
    return (
        <div className="modal">
            
            <div className="modal-content">
                
                <div className="modal-header">
                    <button onClick={reset}>Cerrar</button>
                    <HeaderNoLogo text={mainText}/>
                </div>

                <div className="modal-body">
                    <h3>{secondText}</h3>
                    <EditPass text={leftBtn} text2={rigthBtn} />
                </div>

               

            </div>
            
        </div>
    )
}
