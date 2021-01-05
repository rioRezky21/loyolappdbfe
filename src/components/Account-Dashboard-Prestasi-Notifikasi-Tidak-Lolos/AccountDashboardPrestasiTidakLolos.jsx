import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import './AccountDashboardPrestasiTidakLolos.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Bantuan from './../Popup-Bantuan/PopupBantuanModal'

class AccountDashboardPrestasiTidakLolos extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    gantiState = (state) => {
        this.setState({show: state})
    }

    render() {
        return(
            <div className="account-dashboard-prestasi-tidak-lolos">
                <Bantuan state={this.state.show} stateShow={this.gantiState}/>
                <Container className="container-tidak-lolos-prestasi">
                    <Row className="page-navbar">
                        <img class="header-logo" src={Logo}></img>
                        <header>
                            <h1 class="greet">Halo, Aaron</h1>
                        </header>
                        <ul>
                            <li class="bantuan"><a href="#" onClick={() => this.gantiState(true)}>Bantuan</a></li>
                            <li class="logout"><a href="landing-page-screen">Logout</a></li>
                        </ul>
                    </Row>
                    <main>
                        <h1 className="jalur-prestasi-notifikasi-lolos">Jalur Prestasi</h1>
                        <div className="content-notifikasi-lolos">
                            <p>Mohon maaf, kamu belum lolos seleksi jalur prestasi.</p>
                            <p>-</p>
                            <div className="coba-tes-online">
                                <p>Coba jalur tes online?</p>
                                <a href="Account-Dashboard-Test-Online">
                                    <Button className="button-tes-online" variant="warning">OKE</Button>
                                </a>
                            </div>
                        </div>
                    </main>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardPrestasiTidakLolos 