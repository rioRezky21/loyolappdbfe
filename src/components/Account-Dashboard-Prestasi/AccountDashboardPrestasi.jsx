import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import Check from '../../assets/images/checklist.png'
import './AccountDashboardPrestasi.css'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalur from './../Popup-Ganti-Jalur/PopupModal'
import PopupKetentuan from './../Popup-Ketentuan/PopupKetentuan'
import PopupEditData from './../Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbuModal'
import PopupUploadUlang from './../Frame-36-Upload-Scan-Rapor/Frame36_UploadScanRaporModal'
import PopupBayar from './../Popup-Petunjuk-Pembayaran/PopupPetunjukPembayaranModal'
import PopupLihatFoto from './../Popup-Lihat-Foto/LihatFotoModal'

const customPopupBayarStyles = {
    content: {
        marginTop: "445px",
        marginLeft: "-411px"
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

class AccountDashboardPrestasi extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopupGantiJalur: false,
            showPopupBayar: false,
            showPopupBantuan: false,
            showPopupUploadUlang: false,
            showPopupKetentuan: false,
            showPopupEditData: false,
            showLihatFoto: false
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

    popupUploadUlang = (state) => {
        this.setState({ showPopupUploadUlang: state })
    }

    popupKetentuan = (state) => {
        this.setState({ showPopupKetentuan: state })
    }

    popupEditData = (state) => {
        this.setState({ showPopupEditData: state })
    }
    
    popupLihatFoto = (state) => {
        this.setState({ showLihatFoto: state })
    }

    render() {
        return (
            <div className="account-dashboard-prestasi">
                <PopupBantuan state={this.state.showPopupBantuan} stateShow={this.popupBantuan}/>
                <PopupGantiJalur testStyle={customPopupGantiJalurStyles} state={this.state.showPopupGantiJalur} stateShow={this.popupGantiJalur}/>
                <PopupKetentuan state={this.state.showPopupKetentuan} popupKetentuanInt={this.popupKetentuan} />
                <PopupEditData state={this.state.showPopupEditData} stateShow={this.popupEditData}/>
                <PopupUploadUlang state={this.state.showPopupUploadUlang} stateShow={this.popupUploadUlang} />
                <PopupBayar style={customPopupBayarStyles} state={this.state.showPopupBayar} gantiState={this.popupBayar}/>
                <PopupLihatFoto state={this.state.showLihatFoto} stateShow={this.popupLihatFoto}></PopupLihatFoto>
                <Container className="custom-container">
                    <Navbar className="bg-transparent navbar" expand="lg">
                        <Navbar.Brand>
                            <a href="/">
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
                        <Col md={{span: 4, offset: 0.5}}><h1>Jalur Prestasi</h1></Col>
                        <Col md={{span: 2, offset: 6}}><a href="#" className="link ganti-jalur" onClick={() => this.popupGantiJalur(true)}>ganti jalur</a></Col>
                    </Row>
                    <Row>
                        <Col md={{span: 5.5, offset: 1}} style={{maxWidth:"580px"}}>
                        <Card className="card1">
                            <Card.Body>
                            <table>
                                    <tr>
                                        <td><h2>Tahap Awal (1/3)</h2></td>
                                        <td className="link"><a href="#" onClick={() => this.popupKetentuan(true)}>KETENTUAN</a></td>
                                    </tr>
                                        <td>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Pengisian biodata diri (33%)</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Pengisian data akademik (20%)</td>
                                            </tr>
                                            <tr>
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Upload scan raport <img className="check" src={Check}/><br></br>
                                                    <div className="no-style-bullet"><a className="lihat-foto" href="#" onClick={() => this.popupLihatFoto(true)}>Lihat Foto</a></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Pembayaran biaya pendaftaran<br></br>
                                                <div className="no-style-bullet status">STATUS: Belum dibayarkan</div>
                                                </td>
                                            </tr>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupEditData(true)}>EDIT DATA</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" href="account-dashboard-pengisian-data-akademik" target="_blank">ISI NILAI</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupUploadUlang(true)}>UPLOAD ULANG</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupBayar(true)}>BAYAR</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height"></tr>
                                        </td>
                                </table>
                                <Button className="button-secondary" variant="none" disabled>AJUKAN TAHAP AWAL</Button>{' '}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{span: 6}} style={{maxWidth:"580px", paddingRight:"0px"}}>
                            <Card className="card2">
                                <Card.Body>
                                    <h2>Tahap Kedua</h2><br></br>
                                    <p>*Tahap kedua berupa wawancara dan beep test akan dijadwalkan apabila dinyatakan lolos seleksi tahap awal</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasi;