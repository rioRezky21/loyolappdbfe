import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardTesOnlineTidakLolos.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'
import GantiJalur from './../Popup-Ganti-Jalur/PopupModal'

class AccountDashboardTesOnlineTidakLolos extends React.Component {

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

    gantiStateJalur = (state) => {
        this.setState({showGantiJalur: state})
    }

    render() {
        return (
            <div className="account-dashboard-tes-online-tidak-lolos">
                <Bantuan state={this.state.showBantuan} stateShow={this.gantiStateBantuan}/>
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
                <Container className="container-tes-online-tidak-lolos">
                    <Row className="page-navbar">
                        <img class="header-logo" src={Logo}></img>
                        <header>
                            <h1 class="greet">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <li class="bantuan"><a href="#" onClick={() => this.gantiStateBantuan(true)}>Bantuan</a></li>
                            <li class="logout"><a href="landing-page-screen">Logout</a></li>
                        </ul>
                    </Row>
                    <main>
                        <Row className="content-header">
                            <h1 class="tes-online-header">Jalur Tes Online</h1>
                            <p><a href="#" onClick={() => this.gantiStateJalur(true)}>ganti jalur</a></p>
                        </Row>
                        <div className="tes-online-main-content">
                            <div className="tahap-awal">
                                <h2 className="tahap-awal-header">Tahap Awal</h2>
                                <div className="section-content-pembayaran">
                                    <div className="section-content-1">
                                        <div className="bullet-pointer"></div>
                                        <div className="text-content-1">
                                            <p className="bayar-main-text">Pembayaran biaya pendaftaran</p>
                                            <p className="bayar-sub-text">STATUS : Sudah dibayarkan</p>
                                        </div>
                                    </div>
                                    <Button className="button-tes-online-lunas" variant="none" disabled>LUNAS</Button>
                                </div>
                                <div className="section-content-pengisian">
                                    <div className="section-content-2">
                                        <div className="bullet-pointer"></div>
                                        <p className="isi-main-text">Pengisian biodata diri (100%)</p>
                                    </div>
                                    <Button className="button-tes-online-edit" variant="none" disabled>EDIT BIODATA</Button>
                                </div>
                                <h3 className="jadwal-tes-online">Jadwal Tes Online</h3>
                                <div className="content-jadwal-tes">
                                    <div className="daftar-mata-pelajaran-tes">
                                        <div className="mapel-bindo">
                                            <div className="jadwal-bullet-pointer"></div>
                                            <p>Bahasa Indonesia</p>
                                        </div>
                                        <div className="mapel-mtk">
                                            <div className="jadwal-bullet-pointer"></div>
                                            <p>Matematika</p>
                                        </div>
                                        <div className="mapel-ips">
                                            <div className="jadwal-bullet-pointer"></div>
                                            <p>Ilmu Pengetahuan Sosial</p>
                                        </div>
                                        <div className="mapel-ipa">
                                            <div className="jadwal-bullet-pointer"></div>
                                            <p>Ilmu Pengetahuan Alam</p>
                                        </div>
                                        <div className="mapel-bing">
                                            <div className="jadwal-bullet-pointer"></div>
                                            <p>Bahasa Inggris</p>
                                        </div>
                                    </div>
                                    <div className="jam-tes-online">
                                        <p>09.00 WIB</p>
                                        <p>11.00 WIB</p>
                                        <p>13.00 WIB</p>
                                        <p>15.00 WIB</p>
                                        <p>17.00 WIB</p>
                                    </div>
                                    <div className="tanggal-tes-online">
                                        <p>28 September 2020</p>
                                        <p>28 September 2020</p>
                                        <p>28 September 2020</p>
                                        <p>28 September 2020</p>
                                        <p>28 September 2020</p>
                                    </div>
                                </div>
                                <p className="status-text"><span className="status-tes-online">STATUS</span> : Tidak lolos tes online</p>
                            </div>
                            <div className="tahap-kedua">
                                <h2 className="tahap-dua-header">Tahap Kedua</h2>
                                <p className="detail-tahap-dua">*Tahap kedua berupa wawancara dan beep test akan 
                                    dijadwalkan apabila dinyatakan lolos seleksi tahap awal</p>
                                <div className="pilihan-ujian-akademik">
                                    <div className="ujian-akademik-text">
                                        <div className="bullet-pointer"></div>
                                        <p>Ujian Akademik</p>
                                    </div>
                                    <a href="Account-Dashboard-Tes-Online-Ujian-Akademik-Start-Page">
                                        <Button className="button-mulai-ujian-akademik" variant="warning">Mulai</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardTesOnlineTidakLolos