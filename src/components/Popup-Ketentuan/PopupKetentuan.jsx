import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import './PopupKetentuan.css'
import Ellipse from '../../assets/images/ellipse.png'
import { Button } from 'react-bootstrap'

function PopupKetentuan(props) {
    return(
        <div className='popupKetentuan'>
            <Modal show = {props.state} onHide = {() => props.popupKetentuanInt(false)}>
                <div className='popup-ketentuan'>
                    <stan id='ketentuan'>Ketentuan</stan>
                    <div className='frame18'>
                        <div className='ketentuan-f18-group1'>
                            <p id='ketentuan-1'>
                            Jumlah nilai pengetahuan Bahasa Indonesia, Bahasa Inggris, 
                            IPA, IPS, Matematika setiap semester lebih besar atau sama dengan 400
                            </p>
                            <img id='ellipse1'src={Ellipse}/>
                        </div>
                        <div className='ketentuan-f18-group2'>
                            <p id='ketentuan-2'>
                            Nilai seluruh mata pelajaran harus tuntas sesuai dengan KKM yang ditentukan oleh sekolah
                            </p>
                            <img id='ellipse2'src={Ellipse}/>
                        </div>
                        <div className='ketentuan-f18-group3'>
                            <p id='ketentuan-3'>
                            Raport yang digunakan adalah kelas 7 dan 8 (semester 1 dan 2)
                            </p>
                            <img id='ellipse3'src={Ellipse}/>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PopupKetentuan