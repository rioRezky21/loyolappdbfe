import React from 'react'
import Modal from 'react-modal'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import './DataDiriSiswa.css'

class DataDiriSiswaModal extends React.Component {

    constructor() {
        super()
        this.state = {
            namaSiswa: "",
            nik: "",
            tglLahir: "",
            jenisKelamin: "",
            agama: "",
            emailSiswa: ""
        }
    }

    componentDidMount() {
        
        const urlGet = 'http://localhost:8090/api/list-data-diri/read?siswa_id=12'
        axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                namaSiswa: response.data.Data.namaSiswa,
                nik: response.data.Data.nik,
                tglLahir: response.data.Data.tglLahir,
                jenisKelamin: response.data.Data.jenisKelamin,
                agama: response.data.Data.agama,
                emailSiswa: response.data.Data.emailSiswa
            })
        })
    }

    render() {
        return(
            <div className="popup-data-diri">
                <Container class="container-data-diri-popup">
                    <Modal isOpen={this.props.state} onRequestClose={()=> this.props.stateShow(false)} style={
                        {
                            content: {
                                position: 'absolute',
                                width: '550px',
                                height: '699px',  
                                margin : 'auto',
                                background: '#fff',
                                borderRadius: '30px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }
                    }>
                        <div className="data-diri-content">
                            <h1 className="kepala-content">Data Diri Siswa</h1>
                            <img className="foto-siswa" src="http://localhost:8090/api/uploadSuratKeputusan/lihatFoto?id=5"/>
                            <div className="content-data-diri-wrapper">
                                <div className="judul-data-diri">
                                    <p className="nama-data-diri">Nama</p>
                                    <p className="nama-data-diri">NIK</p>
                                    <p className="nama-data-diri">Tanggal Lahir</p>
                                    <p className="nama-data-diri">Jenis Kelamin</p>
                                    <p className="nama-data-diri">Agama</p>
                                    <p className="nama-data-diri">E-Mail</p>
                                </div>
                                <div className="isi-content-data-diri">
                                    <p className="isi-data-diri">: {this.state.namaSiswa}</p>
                                    <p className="isi-data-diri">: {this.state.nik}</p>
                                    <p className="isi-data-diri">: {this.state.tglLahir}</p>
                                    <p className="isi-data-diri">: {this.state.jenisKelamin}</p>
                                    <p className="isi-data-diri">: {this.state.agama}</p>
                                    <p className="isi-data-diri">: {this.state.emailSiswa}</p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default DataDiriSiswaModal