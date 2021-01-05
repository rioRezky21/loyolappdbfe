import React, { useState } from 'react'
import Modal from 'react-modal'
import "./PopupKetentuanAwalCSS.css"

class PopupKetentuanAwalTestOnline extends React.Component{
    render(){
        return(
            <div className="popupKetentuanAwal">
                
                <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
                  {
                    
                      content: {
                        position: 'absolute',
                        width: '956px',
                        height: '601px',
                        background: '#fff',
                        borderRadius: '30px',
                        outline: 'none',
                        padding: '20px',
                        margin: 'auto'
                      }
                  }
                }>
                <p className="popupKetentuanAwalPromise">Dengan ini, saya Aaron Wijaya bertanggungjawab atas kebenaran data yang saya inputkan Adapun segala 
                    bentuk pemalsuan/manipulasi data yang kiranya dilakukan akan disanksi berupa blacklist dari proses 
                    PPDB SMA Kolese Loyola Semarang</p>
                <rectangle className="popupKetentuanAwalTTD"></rectangle>
                <p className="popupKetentuanAwalTTDText">Tanda Tangan</p>
                <button className="popupKetentuanAwalAggrementButton" onClick={event =>  window.location.href='http://localhost:3000/account-dashboard-test-online'}>
                    <p className="popupKetentuanAwalAggrementButtonText">SAYA MENERIMA SEGALA KETENTUAN YANG BERLAKU</p>
                </button>
                </Modal>
    
            </div>
        );
    }
    
}
export default PopupKetentuanAwalTestOnline
