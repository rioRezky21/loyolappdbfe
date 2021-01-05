import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardPrestasiLolos.css'
import { Container, Row } from 'react-bootstrap'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'

class AccountDashboardPrestasiLolos extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    gantiState = (state) => {
        this.setState({show: state})
    }

    render() {
        return(
            <div className="account-dashboard-prestasi-lolos">
                
                <Container className="container-lolos-prestasi">
                    <Bantuan state={this.state.show} stateShow={this.gantiState}/>
                    <Row className="page-navbar">
                        <img class="header-logo" src={Logo}></img>
                        <header>
                            <h1 class="greet">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <li class="bantuan"><a href="#"onClick={() => this.gantiState(true)}>Bantuan</a></li>
                            <li class="logout"><a href="landing-page-screen">Logout</a></li>
                        </ul>
                    </Row>
                    <main>
                        <h1 className="jalur-prestasi-notifikasi-lolos">Jalur Prestasi</h1>
                        <div className="content-notifikasi-lolos">
                            <p>Selamat Aaron, kamu lolos seleksi jalur prestasi 👏</p>
                            <p>-</p>
                            <p>Segera lakukan daftar ulang dengan orang tua/wali mu ke bagian 
                                administrasi SMA Kolese Loyola Semarang
                            </p>
                        </div>
                    </main>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasiLolos 