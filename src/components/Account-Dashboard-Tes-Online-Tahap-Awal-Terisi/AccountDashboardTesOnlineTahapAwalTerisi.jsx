import React from 'react'
import './AccountDashboardTesOnlineTahapAwalTerisi.css'
import Logo from '../../assets/images/logo-loyola.png'
import Ellipse from '../../assets/images/ellipse.png'
import { Container, Nav, Row, Col, Button, Card } from 'react-bootstrap'
import Bantuan from '../../components/Popup-Bantuan/PopupBantuanModal'
import GantiJalur from '../../components/Popup-Ganti-Jalur/PopupModal'
import Biodata from '../../components/Popup-Isi-Biodata-Biodata-Ibu/PopupIsiBiodataIbuModal'

class AccountDashboardTesOnlineTahapAwalTerisi extends React.Component {
    constructor() {
        super()
        this.state = {
            showBantuan : false,
            editBiodata : false,
            gantiJalur : false
        }
    }

    stateShowBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    stateShowBiodata = (state) => {
        this.setState({editBiodata: state})
    }

    stateShowGantiJalur = (state) => {
        this.setState({gantiJalur: state})
    }

    render() {
        return(
            <div className='acc-dashboard-tes-online-tahap-awal-terisi'>
                <Bantuan state={this.state.showBantuan} stateShow={this.stateShowBantuan}/>
                <Biodata state={this.state.editBiodata} showState={this.stateShowBiodata}/>
                <GantiJalur state={this.state.gantiJalur} stateShow={this.stateShowGantiJalur} testStyle={{
                    content : {
                        position: 'absolute',
                        width: '551px',
                        height: '211px',
                        margin: 'auto',
                        background: '#FFFF',
                        borderRadius: '30px',
                        outline: 'none',
                        padding: '20px',
                        top: '-400px',
                        left: '850px'
                }}}/>
                <Container className='container-tahap-awal-terisi' fluid>
                    <Row>
                        <Col>
                            <div className='topbar'>
                                <img id='logo' src={Logo} alt='LogoLoyola'></img>
                                <stan id='halo'>Halo, Aaron</stan>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link className='bantuan' onClick={()=> this.stateShowBantuan(true)}>Bantuan</Nav.Link>
                                        <Nav.Link className='logout' href='landing-page-screen'>LogOut</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <p id='text-jalur-tes-online'>Jalur Test Online</p>
                            <a href='#' onClick={()=> this.stateShowGantiJalur(true)} className='ganti-jalur'>ganti jalur</a>
                            <div className='tahap-awal'>
                                {/* <a href='Account-Dashboard-Test-Online-Lolos'> */}
                                <p id='text-tahap-awal'>Tahap Awal</p>
                                <div className='isian'>
                                    <div className='biaya-pendaftaran'>
                                        <div className='correct1'>
                                            <img id='ellipse1' src={Ellipse} alt='Ellipse'></img>
                                        </div>
                                        <stan id='text-bayar-biaya-daftar'>Pembayaran biaya pendaftaran</stan>
                                        <stan id='status-bayar'>STATUS : Sudah dibayarkan</stan>
                                        <div className='lunas'>
                                            <stan id='text-lunas'>LUNAS</stan>
                                        </div>
                                    </div>
                                    <div className='biodata'>
                                        <img id='ellipse2' src={Ellipse} alt='Ellipse'></img>
                                        <p id='isi-data-diri'>Pengisian data diri (100%)</p>
                                        <Button className='edit-biodata' onClick={()=> this.stateShowBiodata(true)}>EDIT BIODATA</Button>
                                    </div>
                                    <div className='jadwal-tes'>
                                        <div>
                                            <img id='ellipse3' src={Ellipse} alt='Ellipse'></img>
                                            <p id='bindo'>Bahasa Indonesia</p>
                                            <stan id='time-bindo'>09.00 WIB</stan>
                                            <stan id='date-bindo'>28 September 2020</stan>
                                        </div>
                                        <div>
                                            <img id='ellipse4' src={Ellipse} alt='Ellipse'></img>
                                            <p id='math'>Matematika</p>
                                            <stan id='time-math'>11.00 WIB</stan>
                                            <stan id='date-math'>28 September 2020</stan>
                                        </div>
                                        <div>
                                            <img id='ellipse5' src={Ellipse} alt='Ellipse'></img>
                                            <p id='ips'>Ilmu Pengetahuan Sosial</p>
                                            <stan id='time-ips'>13.00 WIB</stan>
                                            <stan id='date-ips'>28 September 2020</stan>
                                        </div>
                                        <div>
                                            <img id='ellipse6' src={Ellipse} alt='Ellipse'></img>
                                            <p id='ipa'>Ilmu Pengetahuan Alam</p>
                                            <stan id='time-ipa'>15.00 WIB</stan>
                                            <stan id='date-ipa'>28 September 2020</stan>
                                        </div>
                                        <div>
                                            <img id='ellipse7' src={Ellipse} alt='Ellipse'></img>
                                            <p id='bing'>Bahasa Inggris</p>
                                            <stan id='time-bing'>17.00 WIB</stan>
                                            <stan id='date-bing'>28 September 2020</stan>
                                        </div>
                                    </div>
                                </div>
                                {/* </a> */}
                                <p id='text-jadwal-tes-online'>Jadwal Tes Online</p>
                                <p id='status-tes'>STATUS : Belum melakukan tes</p>
                            </div>
                            <div className='tahap-kedua'>
                                <p id='text-tahap-kedua'>Tahap Kedua</p>
                                <p id='text'>*Tahap kedua berupa wawancara dan beep test akan dijadwalkan apabila 
                                    dinyatakan lolos seleksi tahap awal</p>
                                <div className='ujian-akademik'>
                                    <img id='ellipse8' src={Ellipse} alt='Ellipse'></img>
                                    <p id='text-ujian-akademik'>Ujian Akademik</p>
                                    <Button href='Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page' className='mulai'>Mulai</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardTesOnlineTahapAwalTerisi