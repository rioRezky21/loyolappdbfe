import React from 'react'
import Modal from 'react-modal'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import './DataAkademikSiswa.css'

class DataAkademikSiswaModal extends React.Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        const urlGet = 'http://localhost:8090/api/listDataAkademik/view?filter=siswaId=5&orderby&top&skip'
        axios.get(urlGet).then(response => {
            console.log(response.data.items)
            this.setState({
                user: response.data.items
            })
        })
    }

    render() {
        return(
            <div className="popup-data-akademik">
                <Container class="container-data-akademik-popup">
                    <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
                        {
                            content: {
                                position: 'absolute',
                                width: '550px',
                                height: '295px',  
                                margin : 'auto',
                                background: '#fff',
                                borderRadius: '30px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }
                    }>
                        <div className="data-akademik-content">
                            <h1 className="kepala-content-akademik">Data Akademik Siswa</h1>
                            <div className="content-data-akademik-wrapper">
                                <div className="judul-data-akademik">
                                    <p className="nama-data-akademik">NISN</p>
                                    <p className="nama-data-akademik">Sekolah Asal</p>
                                    <p className="nama-data-akademik">Status Dokumen</p>
                                    <p className="nama-data-akademik">Status Administrasi</p>
                                </div>
                                {this.state.user.map(user => {
                                    return (
                                        <div className="isi-content-data-akademik">
                                            <p className="isi-data-akademik">: {user.nisn}</p>
                                            <p className="isi-data-akademik">: {user.sekolahAsal}</p>
                                            <p className="isi-data-akademik">: {user.statusDokumen}</p>
                                            <p className="isi-data-akademik">: {user.statusAdministrasi}</p>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default DataAkademikSiswaModal