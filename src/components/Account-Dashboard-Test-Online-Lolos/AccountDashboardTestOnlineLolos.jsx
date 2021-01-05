import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import './AccountDashboardTestOnlineLolos.css'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalur from './../Popup-Ganti-Jalur/PopupModal'

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

class AccountDashboardTestOnlineLolos extends React.Component {

    constructor() {
        super()
        this.state = {
            showPopupGantiJalur: false,
            showPopupBantuan: false
        }
    }

    popupGantiJalur = (state) => {
        this.setState({ showPopupGantiJalur: state })
    }

    popupBantuan = (state) => {
        this.setState({ showPopupBantuan: state })
    }

    render() {
        return (
            <div className="account-dashboard-tes-online-lolos">
                <PopupBantuan state={this.state.showPopupBantuan} stateShow={this.popupBantuan}/>
                <PopupGantiJalur testStyle={customPopupGantiJalurStyles} state={this.state.showPopupGantiJalur} stateShow={this.popupGantiJalur}/>
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
                                                <tr>
                                                    <td><div className="custom-bullet"></div></td>
                                                    <td className="left-content">Pembayaran biaya pendaftaran<br></br>
                                                    <div className="no-style-bullet status">STATUS: Sudah dibayarkan</div>
                                                    </td>
                                                </tr>
                                                <tr className="row-height">
                                                    <td><div className="custom-bullet"></div></td>
                                                    <td className="left-content">Pengisian biodata diri (100%)</td>
                                                </tr>
                                            </td>
                                            <td style={{textAlign:"right"}}>
                                                <tr className="row-height">
                                                    <td><Button className="custom-button grey" variant="none" disabled>LUNAS</Button>{' '}</td>
                                                </tr>
                                                <tr className="row-height">
                                                    <td><Button className="custom-button grey" variant="none" disabled>EDIT BIODATA</Button>{' '}</td>
                                                </tr>                                          
                                            </td>
                                    </table>
                                    <h2>Jadwal Tes Online</h2>
                                    <table>
                                        <tr className="custom-row">
                                            <td><div className="custom-bullet-small"></div></td>
                                            <td>Bahasa Indonesia</td>
                                            <td>09.00 WIB</td>
                                            <td>28 September 2020</td>
                                        </tr>
                                        <tr className="custom-row">
                                            <td><div className="custom-bullet-small"></div></td>
                                            <td>Matematika</td>
                                            <td>11.00 WIB</td>
                                            <td>28 September 2020</td>
                                        </tr>
                                        <tr className="custom-row">
                                            <td><div className="custom-bullet-small"></div></td>
                                            <td>Ilmu Pengetahuan Sosial</td>
                                            <td>13.00 WIB</td>
                                            <td>28 September 2020</td>
                                        </tr>
                                        <tr className="custom-row">
                                            <td><div className="custom-bullet-small"></div></td>
                                            <td>Ilmu Pengetahuan Alam</td>
                                            <td>15.00 WIB</td>
                                            <td>28 September 2020</td>
                                        </tr>
                                        <tr className="custom-row">
                                            <td><div className="custom-bullet-small"></div></td>
                                            <td>Bahasa Inggris</td>
                                            <td>17.00 WIB</td>
                                            <td>28 September 2020</td>
                                        </tr>
                                    </table>
                                    <div className="status large"><b>STATUS</b> : Lolos tes online</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{span: 6}} style={{maxWidth:"580px", paddingRight:"0px"}}>
                            <Card className="card2">
                            <   Card.Body>
                                    <h2>Tahap Kedua</h2><br></br>
                                    <table className="keterangan-tahap-kedua" style={{width:"80%"}}>
                                        <tr>
                                            <td>Hari/Tanggal</td>
                                            <td>:</td>
                                            <td>5 Agustus 2020</td>
                                        </tr>
                                        <tr>
                                            <td>Lokasi</td>
                                            <td>:</td>
                                            <td>SMA Kolese Loyola Semarang</td>
                                        </tr>
                                    </table>            
                                    <Button className="custom-button blue" variant="primary" href="kartu-ppdb" target="_blank">CETAK KARTU PPDB</Button>{' '}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardTestOnlineLolos;