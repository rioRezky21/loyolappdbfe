import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import Check from '../../assets/images/checklist.png'
import './AccountDashboardPrestasiTahapAwalTerisi.css'
import PopupKetentuan from './../Popup-Ketentuan/PopupKetentuan'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalur from './../Popup-Ganti-Jalur/PopupModal'
import PopupBiodata from './../Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbuModal'
import PopupRaport from './../Frame-36-Upload-Scan-Rapor/Frame36_UploadScanRaporModal'

const customPopupStyles = {
    content: {
        marginTop: "200px",
        marginLeft: "-400px"
    }
}

class AccountDashboardPrestasiTahapAwalTerisi extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            showBantuan : false,
            showGantiJalur : false  ,
            showBiodata : false,
            showUploadRapor : false
        }
    }

    popupKetentuanInt = (state) => {
        this.setState({ show: state })
    }
    popupBantuan =(state) => {
        this.setState({ showBantuan : state})
    }
    popupGantiJalur =(state) => {
        this.setState({ showGantiJalur : state})
    }
    popupBiodata =(state) => {
        this.setState({ showBiodata : state})
    }
    popupRapor =(state) => {
        this.setState({ showUploadRapor : state})
    }
    render() {
        return (
            <div className="account-dashboard-prestasi-tahap-awal-terisi">
                <PopupKetentuan style={customPopupStyles} state = {this.state.show} popupKetentuanInt = {this.popupKetentuanInt}/>
                <PopupBantuan state = {this.state.showBantuan} stateShow = {this.popupBantuan}/>
                <PopupGantiJalur state = {this.state.showGantiJalur} stateShow = {this.popupGantiJalur} testStyle={
                    {
                  content: {
                    position: 'absolute',
                    top: '-300px',
                    right: '-590px',
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
                }/>
                <PopupBiodata state = {this.state.showBiodata} stateShow = {this.popupBiodata}/>
                <PopupRaport state = {this.state.showUploadRapor} stateShow = {this.popupRapor}/>
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
                            <Nav.Link className="bantuan-button" onClick={() => this.popupBantuan(true)} >Bantuan</Nav.Link>
                            <Nav.Link className="logout-button" href='http://localhost:3000/landing-page-screen'>Logout</Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <Row>
                        <Col md={{span: 4, offset: 0.5}}><h1>Jalur Prestasi</h1></Col>
                        <Col md={{span: 2, offset: 6}}><a href="#" className="link ganti-jalur" onClick={() => this.popupGantiJalur(true)}>ganti jalur</a></Col>
                    </Row>
                    <Row>
                        <Col md={{span: 5.5, offset: 1}} style={{maxWidth:"580px"}}>
                        <Card className="card1">
                            <Card.Body>
                                <table>
                                    <tr>
                                        <td><h2>Tahap Awal (3/3)</h2></td>
                                        <td className="link"><a href="#" onClick={() => this.popupKetentuanInt(true)}>KETENTUAN</a></td>
                                    </tr>
                                        <td>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Pengisian biodata diri <span style={{color:"#219653"}}>(100%)</span></td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Pengisian data akademik <span style={{color:"#219653"}}>(100%)</span></td>
                                            </tr>
                                            <tr>
                                                <td><div className="custom-bullet"></div></td>
                                                <td className="left-content">Upload scan raport <img className="check" src={Check}/> <br></br>
                                                    <div className="no-style-bullet"><a className="lihat-foto" href="#">Lihat Foto</a></div>
                                                </td>
                                                {/* <td><img className="check" src={Check}/></td> */}
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
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupBiodata(true)}>EDIT DATA</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" href='http://localhost:3000/account-dashboard-pengisian-data-akademik'>EDIT DATA</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popupRapor(true)}>UPLOAD ULANG</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button disabled" variant="none" disabled>LUNAS</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height"></tr>                                           
                                        </td>
                                </table>
                                <Button className="button-secondary" variant="primary" href='http://localhost:3000/account-dashboard-verifikasi'>AJUKAN TAHAP AWAL</Button>{' '}
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

export default AccountDashboardPrestasiTahapAwalTerisi;