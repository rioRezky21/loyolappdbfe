import React, { useState } from 'react'
import Modal from 'react-modal'
import './Frame36UploadScanRapor.css';
import { Container, Row} from 'react-bootstrap';
import { ENTERED } from 'react-transition-group/Transition';

function Frame36_UploadScanRaporModal(props){
    const text = 
    '1. Scan menggunakan scanner \n' +
    '2. Pastikan format file berupa PDF dan ukuran maksimal 5Mb \n' +
    '3. Input file berdasarkan kelas dan semester masing-masing \n' +
    '4. Klik tombol';

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className="uploadScanRapor">
            <Container class="containerUploadScanRapor">

                <Modal isOpen={props.state} onRequestClose={()=> props.stateShow(false)} style={
              {
                  content: {
                    position: 'absolute',
                    width: '831px',
                    height: '655px',  
                    margin : 'auto',
                    background: '#fff',
                    borderRadius: '16px',
                    outline: 'none',
                    padding: '16px'
                  }
                }
             }>
               
            <Row>
            <label>
                <h1 className = 'header1'>Upload scan rapor semester 5 & 6</h1>
                <h2 className = 'header2'>Ketentuan</h2>
            </label>

            <div className = 'textbox'>
                <div className="display-linebreak"> 
                    {text} 
                </div>
                <button type = 'submit' className = 'upload'>UPLOAD</button>
                <h3 className = 'jika'>jika telah meng-upload keempat rapor</h3>
            </div>

            <div className = 'inputRapor'>
                <h3 className = 'kelas71'>Input rapor kelas VII semester I</h3>
                <h3 className = 'kelas72'>Input rapor kelas VII semester II</h3>
                <h3 className = 'kelas81'>Input rapor kelas VIII semester I</h3>
                <h3 className = 'kelas82'>Input rapor kelas VIII semester II</h3>
            </div>

            <div className = 'button'>
                <button type = 'submit' className = 'batal' onClick={()=> props.stateShow(false)}>BATAL</button>
                <button type = 'submit' className = 'upload2'>UPLOAD</button>
            </div>
            </Row>
            </Modal>
            </Container>
        </div>
    );
}

export default Frame36_UploadScanRaporModal