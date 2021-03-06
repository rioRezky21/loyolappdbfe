import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar, Container, Row, Col, Card, Button} from 'react-bootstrap'
import './AccountDashboardTestOnline.css'
import PopupBantuanModal from '../../components/Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalurModal from '../../components/Popup-Ganti-Jalur/PopupModal'
import PopupPetunjukPembayaranModal from '../../components/Popup-Petunjuk-Pembayaran/PopupPetunjukPembayaranModal'
import Biodata from '../../components/Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbuModal'

const customPopupStyles = {
    content: {
        marginTop : "270px",
        marginLeft : "-410px"
    }
}

class AccountDashboardTestOnline extends React.Component {

    constructor (){
        super()
        this.state = {
            showBantuan : false,
            showGantiJalur : false,
            showPetunjukPembayaran : false,
            isiBiodata : false
        }
    }

    popupStateBantuan = (state) =>{
        this.setState({showBantuan : state})
    }

    popUpStatePetunjukPembayaran = (state) => {
        this.setState({showPetunjukPembayaran : state})
    }

    popupStateGantiJalur = (state) =>{
        this.setState({showGantiJalur : state})
    }

    popupStateShowBiodata = (state) => {
        this.setState({isiBiodata: state})
    }

    render() {
        return (
            <div className="account-dashboard-tes-online">
                <PopupBantuanModal state ={this.state.showBantuan} stateShow = {this.popupStateBantuan}/>
                <PopupPetunjukPembayaranModal style = {customPopupStyles} state ={this.state.showPetunjukPembayaran} gantiState = {this.popUpStatePetunjukPembayaran}/>
                <PopupGantiJalurModal state ={this.state.showGantiJalur} stateShow = {this.popupStateGantiJalur} 

                testStyle={
                    {content: {
                        position: 'absolute',
                        width: '551px',
                        height: '221px',
                        marginTop: '100px',
                        marginLeft: '900px',
                        background: '#fff',
                        outline: 'none',
                        padding: '20px'
                        }
                    }
                }/>
                <Biodata state={this.state.isiBiodata} showState={this.popupStateShowBiodata}/>
                
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
                            <Nav.Link className="bantuan-button" onClick={() => this.popupStateBantuan(true)}>Bantuan</Nav.Link>
                            <Nav.Link className="logout-button" href='landing-page-screen'>Logout</Nav.Link>
                        </Nav.Item>
                    </Navbar>
                    <Row style={{marginTop:"1%"}}>
                        <Col md={{span: 4, offset: 0.5}}><h1>Jalur Test Online</h1></Col>
                        <Col md={{span: 2, offset: 6}}><a className="link ganti-jalur" onClick={() => this.popupStateGantiJalur(true)} variant='link'>ganti jalur</a></Col>
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
                                                <td className="content">Pengisian biodata diri (0%)</td>
                                            </tr>
                                        </td>
                                        <td style={{textAlign:"right"}}>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={() => this.popUpStatePetunjukPembayaran(true)}>BAYAR</Button>{' '}</td>
                                            </tr>
                                            <tr className="row-height">
                                                <td><Button className="button warning" variant="warning" onClick={()=> this.popupStateShowBiodata(true)}>ISI BIODATA</Button>{' '}</td>
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
                                    <td><Button className="button mulai" variant="warning" href= 'Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page'>Mulai</Button>{' '}</td>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardTestOnline;