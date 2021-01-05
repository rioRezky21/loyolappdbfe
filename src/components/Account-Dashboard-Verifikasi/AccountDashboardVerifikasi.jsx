import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardVerifikasi.css'
import { Container, Row, Col} from 'react-bootstrap'
import DataAkademik from './../Popup-Data-Akademik/DataAkademikSiswaModal'
import DataDiri from './../Popup-Data-Diri-Siswa/DataDiriSiswaModal'
import Transkrip from './../Popup-Transkrip-Nilai/TranskripNilaiModal'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'
import GantiJalur from './../Popup-Ganti-Jalur/PopupModal'

class AccountDashboardVerifikasi extends React.Component {

    constructor() {
        super()
        this.state = {
            showDataAkademik: false,
            showDataDiri: false,
            showBantuan: false,
            showGantiJalur: false,
            showTranskrip: false
        }
    }

    gantiStateDataDiri = (state) => {
        this.setState({showDataDiri: state})
    }

    gantiStateBantuan = (state) => {
        this.setState({showBantuan: state})
    }

    gantiStateJalur = (state) => {
        this.setState({showGantiJalur: state})
    }

    gantiStateDataAkademik = (state) => {
        this.setState({showDataAkademik: state})
    }

    gantiStateTranskrip = (state) => {
        this.setState({showTranskrip: state})
    }

    render() {
        return (
            <div className="account-dashboard-verifikasi">
                <Bantuan state={this.state.showBantuan} stateShow={this.gantiStateBantuan}/>
                <DataAkademik state={this.state.showDataAkademik} stateShow={this.gantiStateDataAkademik}/>
                <DataDiri state={this.state.showDataDiri} stateShow={this.gantiStateDataDiri}/>
                <Transkrip state={this.state.showTranskrip} stateShow={this.gantiStateTranskrip}/>
                <GantiJalur state={this.state.showGantiJalur} stateShow={this.gantiStateJalur} testStyle={
                    {
                        content: {
                            position: 'absolute',
                            top: '-200px',
                            right: '-900px',
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
                <Container className="container-verifikasi">
                    <Row className="page-navbar">
                        <img class="header-logo-verifikasi" src={Logo}></img>
                        <header>
                            <h1 class="greet-verifikasi">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <li class="bantuan-verifikasi"><a href="#" onClick={() => this.gantiStateBantuan(true)}>Bantuan</a></li>
                            <li class="logout-verifikasi"><a href="landing-page-screen">Logout</a></li>
                        </ul>
                    </Row>
                    <main>
                        <Row className="content-header-verifikasi">
                            <h1 class="prestasi-header">Jalur Prestasi</h1>
                            <p><a href="#" onClick={() => this.gantiStateJalur(true)}>ganti jalur</a></p>
                        </Row>
                        <Row className="verifikasi-content">
                            <Col className="tahap-awal">
                                <div className="tahap-awal-content">
                                    <h2>Tahap Awal</h2>
                                    <p><span>STATUS : </span>Data sedang diverifikasi oleh panitia</p>
                                </div>
                                <div className="lihat-data">
                                    <p><a href="#" onClick={() => this.gantiStateDataDiri(true)}>Lihat data diri</a></p>
                                    <p><a href="#" onClick={() => this.gantiStateDataAkademik(true)}>Lihat data akademik</a></p>
                                    <p><a href="#" onClick={() => this.gantiStateTranskrip(true)}>Lihat foto transkrip nilai</a></p>
                                </div>
                            </Col>
                            <Col className="tahap-dua">
                                <h2>Tahap Kedua</h2>
                                <p>*Tahap kedua berupa wawancara dan beep test akan dijadwalkan 
                                    apabila dinyatakan lolos seleksi tahap awal
                                </p>
                            </Col>
                        </Row>
                    </main>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardVerifikasi