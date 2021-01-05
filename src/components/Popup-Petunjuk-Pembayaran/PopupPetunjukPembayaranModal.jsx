import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import './PopupPetunjukPembayaranCSS.css'

export default class PopupPetunjukPembayaranModal extends React.Component {

    render(){
        return (
          <div>
            <Modal style={this.props.style.content} show={this.props.state} onHide={() => this.props.gantiState(false)} contentClassName="popup-pembayaran">
                <Modal.Body className="badan">
                    <h1 className='header-pembayaran'>
                        Petunjuk Pembayaran
                    </h1>
                    <h2 className='content-pembayaran'>
                        Silahkan lakukan pembayaran sebesar <span className="content-pembayaran-bold">Rp150.000</span> ke rekening
                        <br/>
                        <h2 className="content-pembayaran-bold">
                            BCA 1828 - 0909 - 59 a/n Y Rudiyanto SJ atau Antonius Vico Christiawan
                        </h2>
                        -
                        <br/>
                        Pembayaran anda akan diverifikasi oleh sistem secara otomatis.
                    </h2>
                </Modal.Body>
            </Modal>
          </div>
        );
    }
}
