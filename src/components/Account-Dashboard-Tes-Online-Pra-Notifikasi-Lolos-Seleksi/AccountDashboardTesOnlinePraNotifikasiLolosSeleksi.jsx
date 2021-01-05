import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardTesOnlinePraNotifikasiLolosSeleksi.css'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'

export default class AccountDashboardTesOnlinePraNotifikasiLolosSeleksi extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopupBantuan: false
        }
    }

    popupBantuanInt = (state) => {
        this.setState({ showPopupBantuan: state})
    }

    render() {
        return (
            <div className = 'TesOnlinePraNotifikasiLolosSeleksi'>
                <PopupBantuan state = {this.state.showPopupBantuan} stateShow = {this.popupBantuanInt}/>
                <Container className = 'containerPraNotifikasiLolosSeleksi'>

                    <div className = 'topbarPraNotifikasiLolosSeleksi'>
                        <img className = 'imagePraNotifikasiLolosSeleksi' src = { Logo }/>  
                        <stan className = 'helloPraNotifikasiLolosSeleksi'>Halo, Aaron</stan>
                        <stan><a href = '#' onClick = {() => this.popupBantuanInt(true)} className = 'bantuanPraNotifikasiLolosSeleksi'>Bantuan</a></stan>
                        <stan><a href = 'landing-page-screen' className = 'logoutPraNotifikasiLolosSeleksi'>Logout</a></stan>
                    </div>

                    <div className = 'headerPraNotifikasiLolosSeleksi'>
                        <p className = 'jalurTesOnlinePraNotifikasiLolosSeleksi'>Jalur Tes Online</p>
                    </div>

                    <div className = 'textPraNotifikasiLolosSeleksi'>
                        <p className = 'isiPraNotifikasiLolosSeleksi'>Proses seleksi selesai. Hasil seleksi akan diumumkan
                        pada hari Kamis, 15 Agustus 2020 melalui web ini
                        ataupun nomor Whatapps kamu dan orangtua.</p>
                    </div>

                </Container>
            </div>
        )
    }
}