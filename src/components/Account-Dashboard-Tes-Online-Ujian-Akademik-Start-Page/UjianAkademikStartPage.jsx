import React from 'react'
import Logo from '../../assets/images/logo-loyola.png'
import {Nav, Navbar} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Check from '../../assets/images/checklist.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UjianAkademikStartPageCSS.css'
import PopupBantuan from './../Popup-Bantuan/PopupBantuanModal'
import Countdown from './Countdown.js'

class UjianAkademikStartPage extends React.Component {
    
    constructor() {
        super()
        this.state = {
            showPopupBantuan: false
        }
    }

    popupBantuan = (state) => {
        this.setState({ showPopupBantuan: state })
    }

    render() {
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (
            <div className="account-dashboard-start-page">
                <PopupBantuan state={this.state.showPopupBantuan} stateShow={this.popupBantuan}/>
                <Container className="main-body">
                <Navbar className="bg-transparent navbar" expand="lg">
                    <Navbar.Brand>
                        <a href="http://localhost:3000/Account-Dashboard">
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
                    <Row>
                        <Col><h1>Ujian Akademik</h1></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Card as="atas">
                            <Card.Body as="content-1">
                                <h2>Mata Pelajaran</h2>
                                <Button className="button-pelajaran" variant="success">Bahasa Indonesia</Button><br/>
                                <Button className="button-pelajaran" variant="success">Matematika</Button><br/>
                                <Button className="button-pelajaran" variant="success">Ilmu Pengetahuan Sosial</Button><br/>
                                <Button className="button-pelajaran" variant="success">Ilmu Pengetahuan Alam</Button><br/>
                                <Button className="button-pelajaran" variant="success">Bahasa Inggris</Button><br/>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col md={6} className="content-2">
                            <Card>
                                <Card.Body>
                                    <h2>Catatan Ujian</h2>
                                    <ul>
                                        <li>Durasi pengerjaan ujian adalah 1 jam 30 menit.</li>
                                        <li>Ujian terdiri dari 40 soal pilihan ganda dan 5 soal essai.</li>
                                    </ul>
                                    <p className="ket-ujian">Ujian dimulai dalam: </p>
                                    <Countdown date={`${year}-12-25T00:00:00`} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UjianAkademikStartPage;