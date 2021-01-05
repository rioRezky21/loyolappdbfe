import { render } from '@testing-library/react'
import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi.css'
import Bantuan from '../../components/Popup-Bantuan/PopupBantuanModal'

export default class AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    stateShowBantuan = (state) => {
        this.setState({show: state})
    }

    render() {
        return (
            <div className = 'AccountDashboardTesOnlineNotifikasiTidakLolosSeleksi'>
                <Bantuan state={this.state.show} stateShow={this.stateShowBantuan}/>
                <Container className = 'containerNotifikasiTidakLolosSeleksi'>
                
                    <div className = 'topbarNotifikasiTidakLolosSeleksi'>
                        <img className = 'imageNotifikasiTidakLolosSeleksi' src = { Logo }/>  
                        <stan className = 'helloNotifikasiTidakLolosSeleksi'>Halo, Aaron</stan>
                        <stan><a href='#' className = 'bantuanNotifikasiTidakLolosSeleksi' onClick={()=> this.stateShowBantuan(true)}>Bantuan</a></stan>
                        <stan><a href = 'landing-page-screen' className = 'logoutNotifikasiTidakLolosSeleksi'>Logout</a></stan>
                    </div>

                    <div className = 'headerNotifikasiTidakLolosSeleksi'>
                        <p className = 'jalurTesOnlineNotifikasiTidakLolosSeleksi'>Jalur Tes Online</p>
                    </div>

                    <div className = 'textNotifikasiTidakLolosSeleksi'>
                        <p className = 'isiNotifikasiTidakLolosSeleksi'>Mohon maaf, kamu belum lolos seleksi jalur tes online.</p>
                    </div>
                
                </Container>
            </div>
        )
    }
}