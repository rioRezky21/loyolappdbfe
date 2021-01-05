import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import './AccountDashboardPrestasiHasilLolos.css'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'
import GantiJalur from './../Popup-Ganti-Jalur/PopupModal'

class AccountDashboardPrestasiHasilLolos extends React.Component {

    constructor() {
        super()
        this.state = {
            showBantuan: false,
            showGantiJalur: false
        }
    }

    gantiStateBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    gantiStateGantiJalur = (state) => {
        this.setState({showGantiJalur: state})
    }

    render() {
        return (
            <div className="account-dashboard-prestasi-hasil-lolos">
                <Bantuan state={this.state.showBantuan} stateShow={this.gantiStateBantuan}/>
                <GantiJalur state={this.state.showGantiJalur} stateShow={this.gantiStateGantiJalur} testStyle={
                    {
                        content: {
                            position: 'absolute',
                            top: '-280px',
                            right: '-580px',
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
                            <Nav.Link className="bantuan-button" onClick={() => this.gantiStateBantuan(true)}>Bantuan</Nav.Link>
                            <Nav.Link className="logout-button" href="landing-page-screen">Logout</Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <Row style={{marginTop:"1%"}}>
                        <Col md={{span: 4, offset: 0.5}}><h1>Jalur Prestasi</h1></Col>
                        <Col md={{span: 2, offset: 6}}><a href="#" className="link ganti-jalur" onClick={() => this.gantiStateGantiJalur(true)}>ganti jalur</a></Col>
                    </Row>
                    <Row>
                        <Col md={{span: 5.5, offset: 1}} style={{maxWidth:"580px"}}>
                            <Card className="card1">
                                <Card.Body>
                                    <h2>Tahap Awal</h2>
                                    <div className="status"><b>STATUS</b> : Lolos seleksi tahap awal</div>
                                    <div className="keterangan">Silakan kirim berkas fotokopi ijazah dan transkrip nilai yang dilegalisir ke kantor panitia PPDB SMA Kolese Loyola Semarang<br></br>
                                            Alamat: <span style={{fontWeight:"bold"}}>Jl. Karanganyar 37, Semarang 50135</span></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{span: 6}} style={{maxWidth:"580px", paddingRight:"0px"}}>
                            <Card className="card2">
                            <Card.Body>
                                    <h2>Tahap Kedua</h2><br></br>
                                    <table className="keterangan-tahap-kedua">
                                        <tr> 
                                            <td style={{width:"110px"}}>Hari/Tanggal</td>
                                            <td>:</td>
                                            <td>5 Agustus 2020</td>
                                        </tr>
                                        <tr>
                                            <td>Lokasi</td>
                                            <td>:</td>
                                            <td>SMA Kolese Loyola Semarang</td>
                                        </tr>
                                    </table>
                                    <Button className="button" variant="primary" href="kartu-ppdb" target="_blank">CETAK KARTU PPDB</Button>{' '}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasiHasilLolos;