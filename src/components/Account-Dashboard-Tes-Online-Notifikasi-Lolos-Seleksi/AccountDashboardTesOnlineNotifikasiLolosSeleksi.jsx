import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardTesOnlineNotifikasiLolosSeleksi.css'
import Bantuan from '../../components/Popup-Bantuan/PopupBantuanModal'

export default class AccountDashboardTesOnlineNotifikasiLolosSeleksi extends React.Component {
    constructor(){
        super()
        this.state = {
            show : false
        }
    }

    popupBantuan = (state) => {
        this.setState({show: state})
    }

    render() {
        return (
            <div className = 'AccountDashboardTesOnlineNotifikasiLolosSeleksi'>
                <Bantuan state={this.state.show} stateShow={this.popupBantuan}/>
                <Container className = 'containerNotifikasiLolosSeleksi'>
                
                    <div className = 'topbarNotifikasiLolosSeleksi'>
                        <img className = 'imageNotifikasiLolosSeleksi' src = { Logo }/>  
                        <stan className = 'helloNotifikasiLolosSeleksi'>Halo, Aaron</stan>
                        <stan><a href = '#' onClick={()=> this.popupBantuan(true)} className = 'bantuanNotifikasiLolosSeleksi' >Bantuan</a></stan>
                        <stan><a href = 'landing-page-screen' className = 'logoutNotifikasiLolosSeleksi'>Logout</a></stan>
                    </div>

                    <div className = 'headerNotifikasiLolosSeleksi'>
                        <p className = 'jalurTesOnlineNotifikasiLolosSeleksi'>Jalur Tes Online</p>
                    </div>

                    <div className = 'textNotifikasiLolosSeleksi'>
                        <p className = 'headNotifikasiLolosSeleksi'>Selamat Aaron, kamu lolos seleksi jalur Tes Online 👏</p>
                        <p className = 'batasNotifikasiLolosSeleksi'>-</p>
                        <p className = 'isiNotifikasiLolosSeleksi'>Segera lakukan daftar ulang dengan orang tua/wali mu
                        ke bagian administrasi SMA Kolese Loyola Semarang</p>
                    </div>
                
                </Container>
            </div>
        )
    }
}