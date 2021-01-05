import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboard.css'
import { Container, Col, Row } from 'react-bootstrap'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'
import KetentuanPrestasi from './../Popup-Ketentuan-Awal/PopupKetentuanAwalModal'
import KetentuanTes from './../Popup-Ketentuan-Awal/PopupKetentuanAwalTestOnline'

class AccountDashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            showBantuan: false,
            showKetentuanPrestasi: false,
            showKetentuanTes: false
        }
    }

    gantiStateBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    gantiStatePrestasi = (state) => {
        this.setState({showKetentuanPrestasi: state})
    }

    gantiStateTes = (state) => {
        this.setState({showKetentuanTes: state})
    }

    render() {
        return (
            <div className="account-dashboard">
                <Bantuan state={this.state.showBantuan} stateShow={this.gantiStateBantuan}/>
                <KetentuanPrestasi state={this.state.showKetentuanPrestasi} stateShow={this.gantiStatePrestasi}/>
                <KetentuanTes state={this.state.showKetentuanTes} stateShow={this.gantiStateTes}/>
                <Container className="container-account-dashboard">
                    <Row className="page-navbar">
                        <img class="header-logo" src={Logo}></img>
                        <header>
                            <h1 class="greet">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <li class="bantuan"><a href="#" onClick={() => this.gantiStateBantuan(true)}>Bantuan</a></li>
                            <li class="logout"><a href="landing-page-screen">Logout</a></li>
                        </ul>
                    </Row>
                    <main>
                        <h1 class="pilih-jalur">Pilih Jalur Pendaftaran</h1>
                        <Row className="main-content">
                            <a className="card-prestasi" href="#" onClick={() => this.gantiStatePrestasi(true)}>
                                <Col className="jalur-prestasi">
                                    <h2 class="prestasi">Prestasi</h2>
                                    <p>Punya keunggulan dari yang lain di bidang 
                                        akademik atau non-akademik? Coba jalur prestasi</p>
                                </Col>
                            </a>
                            <a href="#" className="card-tes-online" onClick={() => this.gantiStateTes(true)}>
                                <Col className="jalur-tes">
                                    <h2 class="tes">Tes Online</h2>
                                    <p>Mari perjuangkan mimpimu untuk menjadi bagian 
                                        dari SMA Kolese Loyola Semarang</p>
                                </Col>
                            </a>
                        </Row>
                    </main>
                </Container>
            </div>
        )
    }    
}

export default AccountDashboard