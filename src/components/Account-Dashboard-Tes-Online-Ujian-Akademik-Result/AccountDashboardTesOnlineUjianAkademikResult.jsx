import React from 'react'
import './AccountDashboardTesOnlineUjianAkademikResult.css'
import Logo from '../../assets/images/logo-loyola.png'
import Check from '../../assets/images/big-check.png'
import { Container, Nav, Navbar, Row, Col, Card, Button } from 'react-bootstrap'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'

class AccountDashboardTesOnlineUjianAkademikResult extends React.Component {

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
        return(
            <div className='acc-dashboard-tes-online-ujian-akademik-result' >
            <PopupBantuan state = {this.state.showPopupBantuan} stateShow = {this.popupBantuanInt}/>
            <Container>
                <Nav>
                    <Nav.Item>
                        <img className='logo' src={Logo} alt='LogoLoyola'></img>
                        <h1 className='halo'>Halo, Aaron</h1>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='bantuan' onClick = {() => this.popupBantuanInt(true)}>Bantuan</Nav.Link>
                        <Nav.Link className='logout' href='landing-page-screen'>LogOut</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Navbar>
                    <Row>
                        <Col>
                            <Card className='result' >
                                <Card.Body>
                                    <img src={Check} alt='Checklist' id='check'></img>
                                    <Card.Title className='text-jawaban-tersimpan'>Jawaban Anda Sudah Tersimpan</Card.Title>
                                    <Card.Text className='text-terima-kasih'>
                                        Terima kasih sudah mengikuti ujian akademik Bahasa
                                        Indonesia. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation.
                                    </Card.Text>
                                    <Button className='kembali' size='sm' block
                                        href='Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page'>
                                        <stan className='text-kembali'>Kembali ke Halaman Ujian</stan>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Navbar>
            </Container>
            </div>
        )
    }
}

export default AccountDashboardTesOnlineUjianAkademikResult