import React from 'react'
import Alarm from '../../assets/images/alarm.png'
import './AccountDashboardUjianAkademikEssay.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Axios from 'axios'
import TimerHeader from './TimerHeader'
import TimerBar from './TimerBar'
import TimerAlarm from './TimerAlarm'
import next from '../../assets/images/keyboard_arrow_right_24px.png'

class AccountDashboardUjianAkademikEssay extends React.Component {

    constructor() {
        super()
        this.state = {
            soalUjian: [],
            jawabanSiswaEsai: '',
            simpan: false
        }
    }

    changeCondition=(condition)=> {
        this.setState({simpan: condition})
    }

    componentDidMount() {
        const urlGet = "http://localhost:8090/api/soalEsai/readAll?filter=esai_id=3&orderby&top&skip"
        Axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                soalUjian: response.data.items
            })
        })
    }

    componentWillUpdate(props, state) {
        if (state.simpan === true) {
            const urlPost = 'http://localhost:8090/api/jawabanSiswaEsai/create?esaiId=4&siswaId=5'
            const data = {
                jawabanSiswaEsai: this.state.jawabanSiswaEsai
            }
            Axios.post(urlPost, data)
            this.movePage()
            this.setState({simpan: false})
        }
    }

    saveTo(db) {
        db.preventDefault()
        const urlPost = 'http://localhost:8090/api/jawabanSiswaEsai/create?esaiId=4&siswaId=5'
        const data = {
            jawabanSiswaEsai: this.state.jawabanSiswaEsai
        }
        Axios.post(urlPost, data)
    }

    whenButtonClicked(db) {
        this.saveTo(db)
        this.movePage()
    }

    movePage() {
        document.location.href="account-dashboard-tes-online-ujian-akademik-result"
    }


    render() {
        return(
            <div className="ujian-akademik-soal-essay">
                <Container className="container-soal-ujian-essay">
                    <Row className="box-jam-ujian">
                        <p className="waktu-ujian">jam berakhir ujian:</p>
                        <TimerHeader/>
                    </Row>
                    <Container className="main-content-soal-essay">
                        <Form className="kolom-jawaban-siswa" onSubmit={(db) => this.whenButtonClicked(db)}>
                            <Form.Control type='text' className='form-jawaban-soal-essay' placeholder="Jawaban" 
                                onChange={(db) => this.setState({jawabanSiswaEsai: db.target.value})}/>
                            <button className="next-soal-button" type ="submit"><img src={next}/></button>
                        </Form>
                        <Row className="header-soal-essay">
                            <Col className="nomor-soal-essay">
                                <p className="nomor-ke">04</p>
                                <div className="sekat-nomor"></div>
                                <p className="dari-nomor">10</p>
                            </Col>
                            <div className="sisa-detik">
                                <TimerAlarm switch={this.changeCondition}/>
                            </div>
                        </Row>
                        <TimerBar/>
                        <div className="isi-soal-essay">
                            {this.state.soalUjian.map(soal => {
                                return(
                                    <p>{soal.pertanyaanEsai}</p>
                                )
                            })}
                        </div>
                    </Container>
                    <p className="">{this.state.simpan}</p>
                </Container>
            </div>
        )
    }
}

export default AccountDashboardUjianAkademikEssay