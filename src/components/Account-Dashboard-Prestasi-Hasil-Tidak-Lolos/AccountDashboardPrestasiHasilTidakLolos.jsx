import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardPrestasiHasilTidakLolos.css'
import { Container, Nav, Row, Col, Card, Button } from 'react-bootstrap'
import PopupBantuanModal from '../../components/Popup-Bantuan/PopupBantuanModal'
import PopupGantiJalurModal from '../../components/Popup-Ganti-Jalur/PopupModal'
import PopupDataAkademik from './../Popup-Data-Akademik/DataAkademikSiswaModal'
import PopupDataDiri from './../Popup-Data-Diri-Siswa/DataDiriSiswaModal'
import PopupTranskrip from './../Popup-Transkrip-Nilai/TranskripNilaiModal'

class AccountDashboardPrestasiHasiTidakLolos extends React.Component {

    constructor (){
        super()
        this.state = {
            showDataAkademik: false,
            showDataDiri: false,
            showBantuan : false,
            showGantiJalur : false,
            showTranskrip: false
        }
    }

    popupStateTranskrip = (state) => {
        this.setState({showTranskrip : state})
    }

    popupStateDataDiri = (state) => {
        this.setState({showDataDiri : state})
    }

    popupStateDataAkademik = (state) => {
        this.setState({showDataAkademik : state})
    }

    popupStateBantuan = (state) =>{
        this.setState({showBantuan : state})
    }

    popupStateGantiJalur = (state) =>{
        this.setState({showGantiJalur : state})
    }

    render() {
        return(
            <div className='acc-dashboard-prestasi-hasil-tidak-lolos'>
                <PopupBantuanModal state ={this.state.showBantuan} stateShow = {this.popupStateBantuan}/>
                <PopupGantiJalurModal state ={this.state.showGantiJalur} stateShow = {this.popupStateGantiJalur} 
                testStyle={
                    {content: {
                        position: 'absolute',
                        width: '551px',
                        height: '221px',
                        marginTop: '120px',
                        marginLeft: '850px',
                        background: '#fff',
                        outline: 'none',
                        padding: '20px'
                        }
                    }
                }/>
                <PopupDataAkademik state={this.state.showDataAkademik} stateShow={this.popupStateDataAkademik}/>
                <PopupDataDiri state={this.state.showDataDiri} stateShow={this.popupStateDataDiri}/>
                <PopupTranskrip state={this.state.showTranskrip} stateShow={this.popupStateTranskrip}/>
                <Container>
                    <Nav>
                        <Nav.Item>
                            <img className='logo' src={Logo} alt='LogoLoyola'></img>
                            <h1 className='halo'>Halo, Aaron</h1>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='bantuan' onClick={() => this.popupStateBantuan(true)}>Bantuan</Nav.Link>
                            <Nav.Link className='logout' href='landing-page-screen'>LogOut</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Row>
                        <Col className='text-jalur-prestasi'>Jalur Prestasi</Col>
                        <Col>
                            <Button className='ganti-jalur' onClick={() => this.popupStateGantiJalur(true)} variant='link'>ganti jalur</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className='tahap-awal'>
                                <Card.Body>
                                    <h1 className='text-tahap-awal'>Tahap Awal</h1>
                                    <p className='status'>STATUS : Tidak lolos seleksi tahap awal</p>
                                    <Nav>
                                        <Nav.Link className='data-diri' onClick={() => this.popupStateDataDiri(true)}>
                                            Lihat data diri
                                        </Nav.Link>
                                        <Nav.Link className='data-akademik' onClick={() => this.popupStateDataAkademik(true)}>
                                            Lihat data akademik
                                        </Nav.Link>
                                        <Nav.Link className='transkrip-nilai' onClick={() => this.popupStateTranskrip(true)}>
                                            Lihat foto transkrip nilai
                                        </Nav.Link>
                                    </Nav>
                                    <Button className='button-daftar-tes' size='sm' href='Account-Dashboard-Test-Online'>
                                        IKUTI PENDAFTARAN JALUR TES
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='tahap-kedua'>
                            <Card.Body>
                                <h1 className='text-tahap-kedua'>Tahap Kedua</h1>
                                <p className='text'>
                                    *Tahap kedua berupa wawancara dan beep test akan dijadwalkan apabila 
                                    dinyatakan lolos seleksi tahap awal
                                </p>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasiHasiTidakLolos