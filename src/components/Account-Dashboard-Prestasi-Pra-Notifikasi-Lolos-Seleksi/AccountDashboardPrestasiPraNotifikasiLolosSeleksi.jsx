import React from 'react'
import './AccountDashboardPrestasiPraNotifikasiLolosSeleksi.css'
import Logo from '../../assets/images/logo-loyola.png'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import Bantuan from '../../components/Popup-Bantuan/PopupBantuanModal'

class AccountDashboardPrestasiPraNotifikasiLolosSeleksi extends React.Component {
    constructor() {
        super()
        this.state = {
            showBantuan : false
        }
    }

    stateShowBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    render() {
        return(
            <div className='primary'>
                <Bantuan state={this.state.showBantuan} stateShow={this.stateShowBantuan}/>
                <Container className='container-restasi-pra-notif-lolos' fluid>
                    <Row>
                        <Col>
                            <div className='topbar'>
                                <img src={Logo} id='logo' alt='LogoLoyola'/>
                                <stan id='halo'>Halo, Aaron</stan>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link id='bantuan' onClick={()=> this.stateShowBantuan(true)}>Bantuan</Nav.Link>
                                        <Nav.Link href='landing-page-screen' id='logout'>LogOut</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className='text-jalur-prestasi'>
                                <p>Jalur Prestasi</p>
                            </div>
                            <div>
                                <a href='#'>
                                <stan id='text-notifikasi'>
                                Proses seleksi selesai. Hasil seleksi akan diumumkan pada hari
                                Kamis, 15 Agustus 2020 melalui web ini ataupun nomor Whatapps kamu dan orangtua.
                                </stan>
                                </a>                        
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasiPraNotifikasiLolosSeleksi