import React from 'react'
import logo from './../assets/logo.png'
import { Header } from '../components/Header/Header'
import { EditPass } from '../components/EditPass/EditPass'
import { BtnMainIcons } from '../components/BtnMainIcons/BtnMainIcons'

export const modalOne = () => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div logo={logo} className="modal-header">
                    <Header text="Holiiiiiii"/>
                </div>

                <div className="modal-body">
                    <EditPass text="Borrar" text2="Modificar" />
                </div>

                <div>
                    <BtnMainIcons />
                </div>

            </div>
            
        </div>
    )
}
