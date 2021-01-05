import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import './AccountDashboardTestOnlineTransferDariJalurPrestasi.css'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalur from './../Popup-Ganti-Jalur/PopupModal'
import PopupBayar from './../Popup-Petunjuk-Pembayaran/PopupPetunjukPembayaranModal'
import PopupBiodata from './../Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbuModal'

const customPopupBayarStyles = {
    content: {
        marginTop: "270px",
        marginLeft: "-400px"
    }
}

const customPopupGantiJalurStyles = {
    content: {
        position: 'absolute',
        top: '-280px',
        left: '660px',
        width: '551px',
        height: '211px',
        margin: 'auto',
        marginTop: '420px',
        background: '#fff',
        borderRadius: '30px',
        outline: 'none',
        padding: '20px'
    }
}

class AccountDashboardTestOnlineTransferDariJalurPrestasi extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopupGantiJalur: false,
            showPopupBayar: false,
            showPopupBantuan: false,
            showPopupBiodata: false
        }
    }

    popupGantiJalur = (state) => {
        this.setState({ showPopupGantiJalur: state })
    }

    popupBayar = (state) => {
        this.setState({ showPopupBayar: state })
    }

    popupBantuan = (state) => {
        this.setState({ showPopupBantuan: state })
    }
    
    popupBiodata = (state) => {
        this.setState({ showPopupBiodata: state })
    }

    render() {
        return (
            <div className="account-dashboard-tes-online-transfer-dari-jalur-prestasi">
                <PopupBantuan state={this.state.showPopupBantuan} stateShow={this.popupBantuan}/>
                <PopupBiodata state={this.state.showPopupBiodata} stateShow={this.popupBiodata}/>
                <PopupGantiJalur testStyle={customPopupGantiJalurStyles} state={this.state.showPopupGantiJalur} stateShow={this.popupGantiJalur}/>
                <PopupBayar style={customPopupBayarStyles} state={this.state.showPopupBayar} gantiState={this.popupBayar}/>
                <Container className="custom-container">
                    <Navbar className="bg-transparent navbar" expand="lg">
                        <Navbar.Brand>
                            <a href="#">
                                <img className="logo-loyola" src={Logo}/>
                            </a>
                        </Navbar.Brand>
                        <Nav.Item className="nav ml auto">
                            <Nav className="navbar-greeting">Halo, Aaron</Nav>
                        </Nav.Item>
                        <Nav.Item className="nav ml-auto">
                            <Nav.Link className="bantuan-button" onClick={() => this.popupBantuan(true)}>Bantuan</Nav.Link>
                            <Nav.Link href="landing-page-screen" className="logout-button">Logout</Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <Row style={{marginTop:"1%"}}>
                        <Col md={{span: 4, offset: 0.5}}><h1>Jalur Test Online</h1></Col>
                        <Col md={{span: 2, offset: 6}}><a href="#" className="link ganti-jalur" onClick={() => this.popupGantiJalur(true)}>ganti jalur</a></Col>
                    </Row>
                    <Row>
                        <Col md={{span: 5.5, offset: 1}} style={{maxWidth:"580px"}}>
                        <Card className="card1">
                            <Card.Body>
                                <table>
                                    <tr>
                                        <h2>Tahap Awal</h2>
                                    </tr>
                                        <td>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="content">Pembayaran biaya pendaftaran<br></br>
                                                <div className="no-style-bullet status">STATUS: Belum dibayarkan</div>
                                                </td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="content">Pengisian biodata diri (100%)</td>
                                            </tr>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupBayar(true)}>BAYAR</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupBiodata(true)}>EDIT BIODATA</Button>{' '}</td>
                                            </tr>
                                        </td>
                                </table>
                                <h2>Jadwal Tes Online</h2>
                                <p>*Tes online akan dijadwalkan apabila telah membayar biaya pendaftaran dan mengisi biodata diri</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{span: 6}} style={{maxWidth:"580px", paddingRight:"0px"}}>
                            <Card className="card2">
                                <Card.Body>
                                    <h2>Tahap Kedua</h2><br></br>
                                    <p>*Tahap kedua berupa wawancara dan beep test akan dijadwalkan apabila dinyatakan lolos seleksi tahap awal</p>

                                    <td><div className="custom-bullet"></div></td>
                                    <td className="content">Ujian Akademik</td>
                                    <td><Button className="button mulai" variant="warning" href="Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page">Mulai</Button>{' '}</td>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardTestOnlineTransferDariJalurPrestasi;