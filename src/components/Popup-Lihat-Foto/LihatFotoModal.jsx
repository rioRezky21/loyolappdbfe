import React from 'react'
import Modal from 'react-modal'
import { Container, Button } from 'react-bootstrap'
import './LihatFoto.css'

class LihatFotoModal extends React.Component {

    render() {
        return(
            <div className="popup-lihat-foto">
                <Container class="container-lihat-foto-popup">
                    <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
                        {
                            content: {
                                position: 'absolute',
                                width: '500px',
                                height: '550px',  
                                margin : 'auto',
                                background: '#fff',
                                borderRadius: '30px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }
                    }>
                        <div className="content-lihat-foto">
                            <h1 className="head-content-lihat-foto">Foto Raport</h1>
                            <img className="lihat-foto" src="http://localhost:8090/api/uploadSuratKeputusan/lihatFoto?id=11"/><br></br>
                            <Button className="lihat-foto-tutup" variant="warning" onClick={()=> this.props.stateShow(false)}>Tutup</Button>
                        </div>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default LihatFotoModal