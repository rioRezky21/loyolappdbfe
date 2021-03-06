import Modal from 'react-modal'
import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import Checklist from '../../assets/images/checklist.png'
import './PopupIsiBiodataBiodataAyah.css'

function PopupIsiBiodataBiodataAyah() {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div className = 'popupAyah'>

            <button onClick={() => setmodalIsOpen(true)}>Pencet aku mas</button>
                
            <Modal isOpen={modalIsOpen} style={
            {
                overlay : {
                    backgroundColor: 'none'
                },
                content:{
                    position: 'absolute',
                    width: '1248px',
                    height: '800px',
                    margin: 'auto',
                    background: '#FFFFFF',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    padding: '20px',
                    border: 'none'
                }
            }}>

                <div className = 'data'>
                    
                    <p><a href = '#' className = 'diri'>Biodata Diri</a></p>

                    <div className = 'ibu'>
                        <img className = 'image' src = { Checklist }/>
                        <p><a href = '#' className = 'data'>Data Ibu</a></p>
                    </div>

                    <div className = 'ayah'>
                        <img className = 'image' src = { Checklist }/>
                        <p className = 'data'>Data Ayah</p>
                    </div>

                </div>

                <form className = 'formBio'>

                    <div className = 'namaAgama'>
                        <Form.Label className = 'nama'>Nama Lengkap<span className = 'bintang'>*</span></Form.Label>
                        <Form.Control type = 'text' className = 'namaForm'/>

                        <Form.Label className = 'agama'>Agama</Form.Label>
                        <Form.Control type = 'text' className = 'agamaForm'/>
                    </div>

                    <div className = 'alamat'>
                        <Form.Label className = 'alamat'>Alamat<span className = 'bintang'>*</span></Form.Label>
                        <Form.Control type = 'text' className = 'alamatForm'/>
                    </div>

                    <div className = 'kecamatanKota'>
                        <Form.Label className = 'kecamatan'>Kecamatan<span className = 'bintang'>*</span></Form.Label>
                        <Form.Control type = 'text' className = 'kecamatanForm'/>

                        <Form.Label className = 'kota'>Kota/Kabupaten<span className = 'bintang'>*</span></Form.Label>
                        <Form.Control type = 'text' className = 'kotaForm'/>
                    </div>

                    <div className = 'hpEmail'>
                        <Form.Label className = 'hp'>Nomor Handphone<span className = 'bintang'>*</span></Form.Label>
                        <Form.Control type = 'text' className = 'hpForm'/>

                        <Form.Label className = 'mail'>Email</Form.Label>
                        <Form.Control type = 'email' className = 'emailForm'/>
                    </div>

                </form>

                <div className = 'simpan'>

                    <Button className = 'simpanData' type = 'submit'>SIMPAN</Button>

                </div>

            </Modal>

        </div>
    )
}

export default PopupIsiBiodataBiodataAyah