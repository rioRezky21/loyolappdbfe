import React, { useState } from 'react'
import Modal from 'react-modal'
import './PopupGantiJalurCSS.css'
import { Container, Row, Col } from 'react-bootstrap';

class PopupModal extends React.Component{

    render(){
        return (
        <div className="PopupModal">
            <Container class="popupGantiJalur-container">
            <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={this.props.testStyle}>
                {/* <Container class="popupGantiJalur-container"> */}
                    <Row>
                        <Col>
                            <h1 className="popupGantiJalurQuestion">Anda yakin ingin ganti jalur pendaftaran ?</h1>
                            <text className="popupGantiJalurWarning">Semua data yang anda input sebelumnya akan hilang</text>
                            <a href='http://localhost:3000/Account-Dashboard' className='link-ganti-jalur'>

                            <button className="popupGantiJalurgantiJalurButton">
                            <text className="popupGantiJalurAggrement">Ya, ganti jalur</text>
                            </button>
                            </a>
                            <button className="popupGantiJalurBatalButton" onClick={() => this.props.stateShow(false)}>
                            <text className="popupGantiJalurBatal">Batal</text>
                            </button>
                        </Col>
                     </Row>  
                {/* </Container> */}
                
            </Modal>
            </Container>
        </div>
    );
        }
}

export default PopupModal