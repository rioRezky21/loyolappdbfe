import React, { useState } from 'react'
import Modal from 'react-modal'
import "./PopupBantuanCSS.css"

class PopupBantuanModal extends React.Component{
    render(){
    return(
        <div className="PopupBantuanModal">
            <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
              {
                  content: {
                    position: 'absolute',
                    width: '992px',
                    height: '546px',
                    margin: 'auto',
                    border: '1px solid #ccc',
                    background: '#F5F6FA',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '16px',
                    outline: 'none',
                    padding: '100px'
                  }
              }
            }> 
            <h1 className="popupBantuanHeader">Bantuan</h1>
            <div className="popupButtonRectangleLeft">
                <circle className="popupButtonLeftAndRightCircle"></circle>
                <div className="popupButtonLogo"></div>
                
                <div className="popupButtonFirstBlueBoxLeft">
                    <text className="popupButtonFirstBlueBoxText">PANDUAN PPDB</text>
                </div>
                <div className="popupButtonSecondBlueBoxLeft">
                    <text className="popupButtonSecondBlueBoxText">SMA Kolese Loyola</text>
                </div>
                <div className="popupButtonThirdBlueBoxLeft">
                    <text className="popupButtonThirdBlueBoxText">Semarang</text>
                </div>
                
                <div className="popupButtonRectangleLeftImage">
                    <text className="popupButtonLeftHeaderText">Panduan PPDB SMA Kolese Loyola Semarang</text>
                    <div className="popupButtonRectangleLeftEllipse1"></div>
                    <div className="popupButtonRectangleLeftEllipse2"></div>
                    <div className="popupButtonRectangleLeftEllipse3"></div>
                </div>
                <div class="PopupBantuanYoutubeButtonLeft">
                </div>
            </div>
            <div className="popupButtonRectangleRight">
                <circle className="popupButtonLeftAndRightCircle"></circle>
                <div className="popupButtonLogo"></div>
                <text className="popupButtonRightHeaderText">Cara Pembayayaran Biaya Pendaftaran </text>
                <div className="popupButtonRectangleRightEllipse1"></div>
                <div className="popupButtonRectangleRightEllipse2"></div>
                <div className="popupButtonRectangleRightEllipse3"></div>
                <div className="popupButtonFirstBlueBoxRight">
                    <text className="popupButtonRightText1">Cara Pembayaran</text>
                </div>
                <div className="popupButtonSecondBlueBoxRight">
                   <text className="popupButtonRightText2">Biaya Pendaftaran</text>
                </div>
                <div className="popupButtonThirdBlueBoxRight">
                    <text className="popupButtonRightText3">PPDB SMA Kolese Loyola</text>
                </div>
                <div className="popupButtonFourthBlueBoxRight">
                    <text className="popupButtonRightText4">Semarang</text>
                </div>
                <div class="PopupBantuanYoutubeButtonRight">
                </div>
            </div>
           <button className="popupButtonTutup" onClick={()=> this.props.stateShow(false)}>
               <p className="popupButtonTutupText">Tutup</p>
               </button>
            </Modal>

        </div>
    );
        }
}

export default PopupBantuanModal