import React from 'react'
import Modal from 'react-modal'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import './TranskripNilai.css'
import TranskripNilai from './TranskripNilai'

class TranskripNilaiModal extends React.Component {

    render() {
        return(
            <div className="popup-transkrip-nilai">
                <Container class="container-transkrip-nilai-popup">
                    <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
                        {
                            content: {
                                position: 'absolute',
                                width: '500px',
                                height: '750px',  
                                margin : 'auto',
                                background: '#fff',
                                borderRadius: '30px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }
                    }>
                        <div className="isi-content-transkrip-nilai">
                            <h1 className="kepala-content-transkrip">Transkrip Nilai Siswa</h1>
                            <img className="transkrip-siswa" src="http://localhost:8090/api/transkrip-nilai/read?id=5"/>
                        </div>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default TranskripNilaiModal